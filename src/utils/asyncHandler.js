const asynHandler = (requestHandler) => {
  (req, res, next) =>{
    Promise.resolve().catch((err)=>next(err))
  }
};

export { asynHandler };

// const asynHandler = (fn) => (req, res, next) => {
//   try {
//       await fn(req, res, next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };