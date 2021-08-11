import express from 'express';

import { startInterviewAnalysis, InterviewAnalysisResult, stopInterviewAnalysis } from '../controllers/api/symbl/InterviewAnalysis/zoomApi.js'
import { sendVideoData } from '../controllers/api/symbl/PitchAnalysis/asyncApi.js'
import { getDataToCompare } from '../controllers/analysisData.js'
import auth from '../middleware/auth.js';

const router = express.Router();


router.post('/stopInterviewAnalysis', auth, stopInterviewAnalysis)
router.post('/interviewAnalysisResult', auth, InterviewAnalysisResult)
router.post('/interviewAnalysis', auth, startInterviewAnalysis);

//------------Pitch Analysis routes------------//
router.post('/pitchAnalysis/sendVideoData', auth, sendVideoData);
router.get('/pitchAnalysis/getVideoData', auth, getDataToCompare)

export default router;