import express from 'express'
import {
  addMember,
  deleteMember,
  getMembers,
  updateMemberDetails,
  getMemberById,
} from '../controllers/form.js'
const router = express.Router()

router.route('/').post(addMember).get(getMembers)
router
  .route('/:id')
  .put(updateMemberDetails)
  .delete(deleteMember)
  .get(getMemberById)
export { router }
