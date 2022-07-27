import Form from '../models/Form.js'

async function addMember(req, res) {
  try {
    const { name, position, insta, linkedin, github } = req.body
    const form = new Form({
      name,
      position,
      insta,
      linkedin,
      github,
    })
    await form.save()
    res.status(201).json({ message: 'Member added' })
  } catch (err) {
    res.status(err.message)
  }
}
async function getMembers(req, res) {
  try {
    const members = await Form.find()
    res.status(200).json(members)
  } catch (err) {
    res.status(err.message)
  }
}
async function updateMemberDetails(req, res) {
  try {
    const { id } = req.params
    let user = await Form.findById(id)
    if (!user) res.json('User not found')
    user.name = req.body.name || user.name
    user.position = req.body.position || user.position
    user.insta = req.body.insta || user.insta
    user.linkedin = req.body.linkedin || user.linkedin
    user.github = req.body.github || user.github
    await user.save()
    res.status(200).json({ message: 'Member updated' })
  } catch (err) {
    res.json(err.message)
  }
}
async function deleteMember(req, res) {
  try {
    const { id } = req.params
    const user = await Form.findByIdAndDelete(id)
    if (!user) res.json('User not found')
    res.status(200).json({ message: 'Member Deleted' })
  } catch (err) {
    res.json(err, message)
  }
}
export { addMember, getMembers, updateMemberDetails, deleteMember }
