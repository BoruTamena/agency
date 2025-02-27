

const FormFields=[
    {
        title:"project title",
        name:"title",
        description:"your project title you want to build ",
        type:"text",
        value:"",

    },

    {
        title:"what type of project ",
        name:"project_type",
        description:"what type of project idea do you have in your mind. which service fit your project ideas ",
        type:"select",
        value:"",
        values:[
            {

            type:"Web Based Project",
            name:"project_type",
            desc:"custom web based project tailored to your project idea",
            value:true
        },
        {
            type:"Api Integration",
            name:"project_type",
            desc:"Custom api developement and integeration",
            value:true
        },
    ]

    },

    {
      title:"project description",
      name:"description",
      description:"Describe what your project is all about by clear words and don't hesitate to discuss your idea in detail it help us to generate a project proposal that tailored to your request ",
      type:"text",
      value:"",
      values:[]
    },

    {
        title:"Email",
        name:"email",
        description:"Finally we will attach your project proposal to this email.Your privacy is important to us. We guarantee that your information will remain confidential and will not be shared with third parties",
        type:"text",
        value:"",
      
      },

      {
        title:"phone number",
        name:"phone_number",
        description:"It is always great to get intouch with you. to discuss the next step. ",
        type:"text",
        value:"",
      
      },

]

export default FormFields