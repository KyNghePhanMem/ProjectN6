<template>
  <div class="mgi__form-layout">
      <form @submit.prevent="onSubmit" class="mgi__form">
        <div class="mgi__form__block">
          <div class="mgi__form__logo">
              <img src="/src/assets/logo/logo.png" alt="Mgi Logo">
          </div>
          <div class="mgi__form__desc">
              <p>Welcome to IT Support App!</p>
          </div>
          <label for="username" class="mgi__form__username">
            <span class="mgi__form__username-title">User Name</span>
            <input type="text" id="username" v-model="state.username" />
            <span v-if="v$.username.$error" class="mgi__form__username-validate">
                The User Name is required
            </span>
          </label>
           <label for="password" class="mgi__form__password">
            <span class="mgi__form__password-title">Password</span>
            <input :type="passwordType" v-model="state.password" id="password" />
            <span v-if="v$.password.$error" class="mgi__form__password-validate">
                The field is required
            </span>
            <img @click="onClickEye" v-if="eyeCheckPass" src="/src/assets/action-icon/eye_1.svg" alt="" >
            <svg-login class="mgi__form__eye2icon" @click="onClickEye" v-else :heightbysize="15" :path="icons.eyesecondIcon" :widthbysize="15" color="gray" />
          </label>
          <div class="mgi__form__require">
            <label for="remember" class="mgi__form__checkbox ">
              <input type="checkbox" id="remember">
              <div  class="mgi__login-from__checkbox-block"></div>
              <span >Remember me?</span>
            </label>
            
            <div class="mgi__form__forgot-link">
              <router-link :to="{name:'forgot'}">Forgot Password</router-link>
            </div>
          </div>
          <div class="mgi__form__submit">
              <button type="submit">LOGIN</button>
          </div>
        </div>
      </form> 
    <div class="mgi__login-error" v-if="checkError">
      <div class="mgi__login-error__block">
        <svg-login :heightbysize="25" :path="icons.errorIcon" :widthbysize="16" color="white" />
        <span>Email/Usernam or password is incorrect.</span>
      </div>
    </div> 
  </div>
</template>

<script>
import {eyefirstIcon,eyesecondIcon,errorIcon} from '/src/plugins/icons.ts';
import  useValidate  from '@vuelidate/core';
import {required} from '@vuelidate/validators';
import { defineComponent,computed, reactive, ref } from 'vue';
import SvgLogin from '/MGISolutions/src/components/SvgLogin.vue';


export default defineComponent({
  name: "LOGIN",
  components: { SvgLogin },
  setup() {
    const checkError = ref(false)
    const eyeCheckPass = ref(true);
    const passwordType = ref("password");
    const icons=reactive({eyefirstIcon,eyesecondIcon,errorIcon})
    const state = reactive({
        username:'',
        password:''
    })
    const rules =computed (()=>{
      return {
        username: {required},
        password: {required}
      };
    })
    const v$ = useValidate(rules ,state)

    const onClickEye = ()=>{
      eyeCheckPass.value = !eyeCheckPass.value;
      passwordType.value = passwordType.value === "password" ? "text" : "password";
    }
    function onSubmit(){
      v$.value.$touch();
    }
    return {onSubmit , eyeCheckPass , onClickEye ,passwordType ,state,v$,SvgLogin,icons,checkError};
  },

});
</script>

