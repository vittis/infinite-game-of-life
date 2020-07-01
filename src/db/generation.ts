import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenerationSchema = new Schema({
  generation: Number,
  board: [Number],
});
const Generation = mongoose.model('Generation', GenerationSchema);

export default Generation;
