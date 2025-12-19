
import mongoose from "mongoose";

mongoose.connect(process.env.DB)
.then(()=>console.log("connected"))
.catch(()=>console.log("failed"))

export default mongoose