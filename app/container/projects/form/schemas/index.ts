

import { z } from "zod";



const ProjectFormSchema =z.object({

    title:z.string().min(10,{message:"project title must be > 10 "}),
    project_type:z.string().min(10,{message:"you should select the service that best match you "}),
    description:z.string().min(10,{message:"project should be given in much detail more that this "}),
    email :z.string().min(10,{message:"email is required "})
})

export default ProjectFormSchema