

import { z } from "zod";



const ProjectFormSchema =z.object({

    title:z.string().min(10,{message:"project title must be > 10 "}),
    project_type:z.string().min(10,{message:"project title must be > 10 "}),
    description:z.string().min(10,{message:"project title must be > 10 "}),
    //  :z.string().min(10,{message:"project title must be > 10 "})
})

export default ProjectFormSchema