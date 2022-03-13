
const asyncWrapper = (fn)=> {
    return async(req, res, next)=> {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(404).json({msg: "Some thing went wrong"})
        }
    }
}


module.exports = asyncWrapper