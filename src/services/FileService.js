import axios from "axios";

class FileService {
    static Upload(file) {
        const CLOUD_NAME = 'dtxyz2s1g';
        const UPLOAD_API = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "a09ikbyc");
        return axios.post(UPLOAD_API, formData)
    }
}

export default FileService;