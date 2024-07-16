import Typography from "@mui/material/Typography";
import {Button, Card, CardContent} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

export const BlogList = () => {
    const blogs = [
        {title: 'My First Blog', description: 'This is my first blog for my website', blogName: 'blog1'},
        {title: 'My Second Blog', description: 'This is my second blog for my website', blogName: 'blog2'}
    ];

    return (
        <section className="blog-list flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Personal Blogs
            </Typography>
            <div className={"flex-row justify-center"}>
                <div className="blog-list-items flex justify-around flex-wrap m-2">
                    {blogs.map((blog) => (
                        <Card className={"w-80"}>
                            <CardContent>
                                <div className="flex justify-between items-center mb-4">
                                    <Typography variant="h6" className="text-xl font-semibold">{blog.title}</Typography>
                                    <Button
                                        variant="outlined"
                                        endIcon={<LaunchIcon />}
                                        href={`/blog/${blog.blogName}`}
                                        sx={{ color: 'teal', borderColor: 'teal' }}
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
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};