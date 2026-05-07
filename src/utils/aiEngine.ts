// Backend is currently disabled for pure frontend development. 
// Functions now return simulated successful responses.

export const analyzeCandidates = async (jd: string, candidates: any[]) => {
  console.log("Simulating AI Analysis for:", jd);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    status: "success",
    analysis: candidates.map(c => ({
      id: c.id,
      score: Math.floor(Math.random() * 40) + 60, // 60-100
      feedback: "Simulated AI feedback based on profile analysis."
    }))
  };
};

export const trainAIModel = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { status: "success", message: "Model training simulated." };
};

export const initiateRealCall = async (phoneNumber: string) => {
  console.log("Simulating Real Call to:", phoneNumber);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { status: "success", call_id: "sim_" + Math.random().toString(36).substr(2, 9) };
};

