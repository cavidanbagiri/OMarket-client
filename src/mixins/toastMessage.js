import { reactive } from "vue";

const toastMessage = () => {
  const toast_message = reactive({
    show: false,
    message: "",
    type: "",
  });

  const showSuccess = (show_message, message_text, message_type) => {
    toast_message.show = true;
    toast_message.message = message_text;
    toast_message.type = "success";
    setTimeout(() => {
      toast_message.show = false;
    }, 1000);
  };

  const showError = (show_message, message_text, message_type) => {
    toast_message.show = true;
    toast_message.message = message_text;
    toast_message.type = "";
    setTimeout(() => {
      toast_message.show = false;
    }, 1000);
  };

  return {
    showSuccess,
    showError,
    toast_message
  }


};


export default toastMessage;