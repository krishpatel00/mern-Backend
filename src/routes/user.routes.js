import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updatedUserAccount,
  updatedUserAvatar,
  updatedUserCoverImage,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").patch(verifyJWT,changeCurrentPassword)
router.route("/getUserData").get(verifyJWT,getCurrentUser)
router.route("/updateAvatar").patch(verifyJWT,upload.single('avatar'),updatedUserAvatar)
router.route("/updateCoverImage").patch(verifyJWT,upload.single('coverImage'),updatedUserCoverImage)
router.route("/updatedata").patch(verifyJWT,updatedUserAccount)
router.route('/c/:username').get(verifyJWT,getUserChannelProfile);
router.route('/history').get(verifyJWT,getWatchHistory);


export default router;
