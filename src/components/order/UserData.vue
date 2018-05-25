<template>
<div class="fetchtakeout-dialog">
     <Form ref="formCustom" :model="formCustom"  :label-width="80" style="margin-top:20px;">
         
     </style>
        <FormItem label="用户名" prop="用户名">
            <Input type="text" v-model="formCustom.user"></Input>
        </FormItem>
        <FormItem label="电话" prop="电话">
            <Input type="text" v-model="formCustom.call"></Input>
        </FormItem>
        <FormItem label="地址" prop="地址">
            <Input type="text" v-model="formCustom.add" number></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit(formCustom)">提交</Button>
            <Button type="ghost" @click="handleReset(formCustom)" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</div>
   
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    call: '',
                    user: '',
                    add: ''
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$emit('byValue',name);
                // 用户保存到本地
                if(name.user !== '' && name.call !== '' && name.add !== '') {
                    alert("欢迎来到饿了么！！！")
                    localStorage.setItem('userData', JSON.stringify(name));
                    this.$emit('close')
                }else{
                    alert('请填写完整信息')
                }
            },
            handleReset (name) {
                if(name.user == '' || name.call == '' || name.add == '') {
                    alert("请填写完整信息！！！")
                }else{
                    alert("你都输完了还点取消干嘛？请点击旁边的提交按钮！！！！")
                }
                 
            }
        }
    }
</script>
<style>
    .ivu-input {
        width: 80%;
    }
</style>
