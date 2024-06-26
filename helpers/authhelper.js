import bcrypt from 'bcrypt'
export const hashPassword =async(password)=>{
    try{
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds)
    }catch(error){
        console.log(error)
    }
}


export const comparePassword=async(password,hashesPassword)=>{
    return bcrypt.compare(password,hashedPassword);
};