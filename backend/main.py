
import os
import re
import google.generativeai as genai
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# --- 1. CONFIGURATION & SECURITY ---
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file!")

# Configure the SDK
genai.configure(api_key=api_key)

# Initialize Gemini with specific instructions for neutrality
model = genai.GenerativeModel(
    model_name="gemini-3-flash-preview",
    system_instruction=(
        "You are a neutral voter awareness assistant for 'One Nation One Election' (ONOE). "
        "Provide objective, non-partisan facts. Always present both pros and cons. "
        "If the user asks something unrelated to elections, politely steer them back."
    )
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    blind: bool = False

# --- 2. UTILITY FUNCTIONS ---

def is_onoe_related(text):
    text = text.lower()
    primary = ["one nation one election", "onoe", "simultaneous election", "synchronize"]
    secondary = ["election", "constitution", "lok sabha", "assembly", "federalism", "voting"]
    if any(k in text for k in primary): return True
    return sum(1 for k in secondary if k in text) >= 2

def apply_blind_mode(text):
    text = re.sub(r"BJP|Congress|AITC|AAP|SP|BSP", "Party X", text, flags=re.IGNORECASE)
    text = re.sub(r"Narendra Modi|Rahul Gandhi|Amit Shah", "Leader Y", text, flags=re.IGNORECASE)
    return text

def get_rule_based_reply(question):
    q = question.lower()
    if any(x in q for x in ["article", "constitution", "legal"]):
        return ("ONOE requires changes to Articles 83 and 172. It would likely need a "
                "Constitutional Amendment Bill passed by a two-thirds majority in Parliament.")
    if any(x in q for x in ["status", "current", "happen"]):
        return ("The Kovind Committee submitted its report in March 2024. The Union Cabinet "
                "has accepted it, but legislative action is still pending.")
    return None

# --- 3. THE CHAT ENDPOINT ---

@app.post("/chat")
async def chat(req: ChatRequest):
    question = req.message
    
    # STEP 1: Try your specific rule-based answers first.
    # If a rule matches, we don't even need the 'is_onoe_related' check!
    reply = get_rule_based_reply(question)

    if reply is not None:
        # Apply Blind Mode if requested and return immediately
        if req.blind:
            reply = apply_blind_mode(reply)
        return {"reply": reply}

    # STEP 2: If no rule matched, THEN check if the topic is generally ONOE related
    if not is_onoe_related(question):
        return {
            "reply": "I focus on ONOE facts. How can I help you with election data?"
        }

    # STEP 3: If it's ONOE related but not a specific rule, use Gemini
    try:
        response = await model.generate_content_async(question)
        reply = response.text
    except Exception as e:
        print(f"ERROR: {e}")
        reply = "I'm having trouble connecting to my AI. Please try again later."

    # STEP 4: Apply Blind Mode filter
    if req.blind:
        reply = apply_blind_mode(reply)

    return {"reply": reply}