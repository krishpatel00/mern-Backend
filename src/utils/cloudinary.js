import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_NAME,
  api_secret: process.env.CLOUDINARY_API_SECERET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file successfully
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //console.log("upload file successfully", response.url);
    fs.unlinkSync(localFilePath)
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteOldFileInCloudinary = async (oldData) => {
  try {
    const publicIdToDelete = oldData.split("/").pop().split(".")[0];
    console.log("publicIdToDelete ", publicIdToDelete);
    await cloudinary.uploader.destroy(
      publicIdToDelete,
      { resource_type: "image" },
      (error, result) => {
        if (error) {
          throw new ApiError(401, "Error in Uploading to cloud");
        }
      }
    );
  } catch (error) {
    return null;
  }
};

export { uploadOnCloudinary , deleteOldFileInCloudinary};
