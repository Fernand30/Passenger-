// import Toast from "react-native-root-toast";
import Toast from 'react-native-simple-toast';

let isShow = false;
export const showToast = (text) => {
  if (!isShow) {
   
    Toast.showWithGravity(text, Toast.SHORT,Toast.TOP);
  }
};