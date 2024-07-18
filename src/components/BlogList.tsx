import Typography from "@mui/material/Typography";
import {Button, CardContent} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import ShineBorder from "@/components/magicui/shine-border.tsx";

export const BlogList = () => {
    const blogs = [
        {
            title: 'Elastic Stack on Kubernetes (ECK) with Service Mesh (Istio)',
            description: 'First ever blog to help folks configure elastic stack on kubernetes with service mesh.', blogName: 'blog1'
        },
        {title: 'My Second Blog', description: 'This is my second blog for my website', blogName: 'blog2'}
    ];

    return (
        <section id="blogs" className="blog-list flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Personal Blogs
            </Typography>
            <div className={"flex-row justify-center"}>
                <div className="blog-list-items flex justify-around flex-wrap m-2 mb-4">
                    {blogs.map((blog) => (
                        <ShineBorder
                            className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl w-80 mb-4"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            <CardContent>
                                <div className="flex justify-between items-center mb-4">
                                    <Typography variant="h6" className="text-xl font-semibold">{blog.title}</Typography>
                                    <Button
                                        variant="outlined"
                                        endIcon={<LaunchIcon/>}
                                        href={`/blog/${blog.blogName}`}
                                        sx={{color: 'teal', borderColor: 'teal'}}
                                    >
                                        View
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <Typography variant="body1">
                                        {blog.description}
                                    </Typography>
                                </div>
                            </CardContent>
                        </ShineBorder>
                    ))}
                </div>
            </div>
        </section>
    );
};