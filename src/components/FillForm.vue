<template>
  <div class="fill-form">
    <el-form class="ruleForm" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="320px" :label-position="labelPosition">
      <div class="info">
        <div class="icon-title">
          <div class="icon"></div>
          <span class="title">Personal Info</span>
        </div>

        <div class="form-section">
          <el-row>
            <el-col :span="11">
              <el-form-item label="Full Name" prop="name">
                <el-input v-model="ruleForm.name" :maxlength="maxlength" placeholder="Ex.Captain John Smith"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :span="11">
              <el-form-item label="Gender" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="Ghoose Gender">
                  <el-option label="Female" value="female"></el-option>
                  <el-option label="Male" value="male"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Date of Birth" prop="birth">
                <el-date-picker type="date" v-model="ruleForm.birth" :picker-options="pickerOptionsBirth" placeholder="Choose"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Nationality" prop="nation">
                <el-select v-model="ruleForm.nation" placeholder="Ghoose Nationality">
                  <el-option v-for="nation in nations" :key="nation.value" :label="nation.label" :value="nation.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            
            <el-col :span="11">
              <el-form-item label="Photo" prop="photo">
                <el-input v-model="ruleForm.photo" placeholder="Upload your photo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email" placeholder="Ex.JohnSmith@email.com"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :span="11">
              <el-form-item label="Skype ID" prop="skype">
                <el-input v-model="ruleForm.skype" placeholder="Ex.captainjohnsmith"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </div> 
      </div>

      <div class="background">
        <div class="icon-title">
          <div class="icon"></div>
          <span class="title">Background</span>
        </div>

        <div class="form-section">
          <el-row>
            <el-col :span="11">
              <el-form-item label="Teaching experiences" prop="experience">
                <el-select v-model="ruleForm.experience" placeholder="Ghoose">
                  <el-option label="0 ~ 1 year" value="1"></el-option>
                  <el-option label="1 ~ 3 years" value="2"></el-option>
                  <el-option label="above 3 years" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="Age of students" prop="student">
                <el-select v-model="ruleForm.student" placeholder="Ghoose">
                  <el-option label="Children" value="1"></el-option>
                  <el-option label="Teenagers" value="2"></el-option>
                  <el-option label="Adults" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Computer System" prop="system">
                <el-select v-model="ruleForm.system" placeholder="Ghoose">
                  <el-option label="Windows XP" value="1"></el-option>
                  <el-option label="Windows7 & above" value="2"></el-option>
                  <el-option label="Mac" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="Working Place" prop="place">
                <el-select v-model="ruleForm.place" placeholder="Ghoose">
                  <el-option label="place 1" value="1"></el-option>
                  <el-option label="place 2" value="2"></el-option>
                  <el-option label="place 3" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Institution" prop="institution">
                <el-input v-model="ruleForm.institution" placeholder="Ex.University of Texas"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="Degree" prop="degree">
                <el-select v-model="ruleForm.degree" placeholder="Ghoose Degree">
                  <el-option label="Bachelors" value="1"></el-option>
                  <el-option label="Masters" value="2"></el-option>
                  <el-option label="Doctorate" value="3"></el-option>
                  <el-option label="Other" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Major" prop="major">
                <el-input v-model="ruleForm.major" placeholder="Ex.Psychology"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="Graduation Date" prop="graduation">
                <el-date-picker type="date" v-model="ruleForm.graduation" :picker-options="pickerOptionsGraduation" placeholder="Choose"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

        </div> 
      </div>

      <div class="resume">
        <div class="icon-title">
          <div class="icon"></div>
          <span class="title">CV/Resume</span>
        </div>

        <div class="form-section">
          <el-row>
            <el-col :span="11">
              <el-form-item label="CV" prop="cv">
                <el-input v-model="ruleForm.cv" placeholder="Upload your resume"></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :span="11">
              <el-form-item label="Gender" prop="gender">
                <el-radio v-model="radio" label="1" @change="toggle">
                  <el-select v-model="ruleForm.gender" placeholder="Ghoose Gender">
                    <el-option label="Female" value="female"></el-option>
                    <el-option label="Male" value="male"></el-option>
                  </el-select>
                </el-radio>
              </el-form-item>
            </el-col>
          </el-row>

        </div> 
      </div>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit Application</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      ruleForm: {
        
      },
      maxlength: 31,
      rules: {
        name: [
          { required: true, message: 'please enter your full name', trigger: 'blur' },
          { min: 1, max: 30, message: '', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: 'please select gender', trigger: 'change' }
        ],
        birth: [
          { type: 'date', required: true, message: 'please select date', trigger: 'change' }
        ],
        nation: [
          { required: true, message: 'please select nationality', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'please enter your Email', trigger: 'blur' }
        ],
        experience: [
          { required: true, message: 'please select teaching experiences', trigger: 'change' }
        ],
        student: [
          { required: true, message: 'please select age of students', trigger: 'change' }
        ],
        system: [
          { required: true, message: 'please select computer system', trigger: 'change' }
        ],
        place: [
          { required: true, message: 'please select working place', trigger: 'change' }
        ],
        institution: [
          { required: true, message: 'please enter your institution', trigger: 'blur' }
        ],
        degree: [
          { required: true, message: 'please select degree', trigger: 'change' }
        ],
        major: [
          { required: true, message: 'please enter your major', trigger: 'blur' }
        ],
        cv: [
          { required: true, message: 'please upload your resume', trigger: 'blur' }
        ]
      },
      pickerOptionsBirth: {
        disabledDate (time) {
          return time.getTime() < new Date(1938, 2, 7);
        }
      },
      pickerOptionsGraduation: {
        disabledDate (time) {
          return time.getTime() < new Date(1958, 2, 7);
        }
      },
      nations: [
        { value: 'America', label: 'America' },
        { value: 'Austria', label: 'Austria' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Canada', label: 'Canada' },
        { value: 'England', label: 'England' },
        { value: 'Finland', label: 'Finland' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Poland', label: 'Poland' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Switzerland', label: 'Switzerland' },
      ],
      radio: '1'
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    toggle () {
      this.radio = 2;
      console.log(111111);
      console.log(this.radio);
    }
  }
}
</script>


<style>
  .fill-form {
    width: 1200px;
    margin: 0 auto;
  }
  .fill-form .ruleForm {
    padding: 20px;
  }
  .fill-form .icon-title {
    height: 90px;
    line-height: 120px;
  }
  .fill-form .info .icon-title .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    background: url(../../static/images/user-list.png) center center no-repeat;
  }
   .fill-form .background .icon-title .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    background: url(../../static/images/resume.png) center center no-repeat;
  }
   .fill-form .resume .icon-title .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    background: url(../../static/images/upload.png) center center no-repeat;
  }
  .fill-form .icon-title .title {
    font-size: 32px;
  }
  .fill-form .form-section {
    padding-left: 56px;
  }

  /* 覆写element-ui样式 */
  .fill-form .el-input__inner {
    width: 370px;
    height: 46px;
    /* 会导致输入框hover值失效，但选择框正常 */
    /* border: 1px solid #9c9c9c; */
  }
  .fill-form .el-input__inner：hover {
    /* 未生效 */
    /* border-color: #c0c4cc !important; */
  }
  .fill-form .el-form-item.is-required .el-form-item__label:before {
    content: '';
    color: transparent;
    margin-left: 0;
  }
  .fill-form .el-form-item.is-required .el-form-item__label:after {
    content: '*';
    color: #f56c6c;
    margin-left: 5px;
    font-size: 16px;
  }
  .fill-form .el-button {
    width: 400px;
    height: 80px;
    font-size: 30px;
    border-radius: 12px;
    margin: 60px 0 50px 350px;
  }
  .fill-form .el-form-item__label {
    padding: 0;
  }
</style>
