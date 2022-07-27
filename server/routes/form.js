import express from 'express'
import {
  addMember,
  deleteMember,
  getMembers,
  updateMemberDetails,
} from '../controllers/form.js'
const router = express.Router()

router.route('/').post(addMember).get(getMembers)
router.route('/:id').put(updateMemberDetails).delete(deleteMember)
export { router }
