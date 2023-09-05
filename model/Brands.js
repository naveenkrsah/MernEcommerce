const mongoose = require('mongoose');
const {Schema} = mongoose;

const brandsSchema = new Schema({
    value:{type:String , required:true , unique:true},
    label:{type:String, required:true , unique:true}
});

const virtual =  brandsSchema.virtual('id');
virtual.get(function(){
    return this._id;
})

brandsSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret) {delete ret._id}
})

exports.Brand=mongoose.model('Brand',brandsSchema);