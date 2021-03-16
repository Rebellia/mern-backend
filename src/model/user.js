const userSchema = mongoose.Schema({
  username: { type: String, required: true},
  created: {type: Date, default: () => new Date()},
});

const User = module.exports = mongoose.model('user', userSchema)
