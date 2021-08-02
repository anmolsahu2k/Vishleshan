import express from 'express';

import { InterviewAnalysis, InterviewAnalysisResult, stopInterviewAnalysis } from '../controllers/api/symbl/InterviewAnalysis/zoomApi.js'
import auth from '../middleware/auth.js';

const router = express.Router();




router.post('/stopInterviewAnalysis', auth, stopInterviewAnalysis)
router.post('/interviewAnalysisResult', auth, InterviewAnalysisResult)
router.post('/interviewAnalysis', auth, InterviewAnalysis);

export default router;