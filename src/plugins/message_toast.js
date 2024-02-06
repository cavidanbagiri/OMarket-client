
import MessageToast from '../components/MessageToast.vue'

const MessageToastPlugin = {
  install(app, options){
    app.component('message-toast', MessageToast);
  }
}

export default MessageToastPlugin;
