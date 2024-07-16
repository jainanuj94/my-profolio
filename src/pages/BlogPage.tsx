import {useEffect, useState} from 'preact/hooks';
import {marked} from "marked";
import {useLocation, useParams} from "wouter";

const BlogPage = () => {
    const [content, setContent] = useState('');
    const [_, setLocation] = useLocation();
    const params = useParams();

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const blogName = params.name as string;
                const response = await fetch(`/src/blogs/${blogName}.md`);
                const text = await response.text();
                setContent(marked(text) as string);
            } catch (error) {
                console.error('Error fetching the markdown file:', error);
                setLocation('/');
            }
        };

        fetchMarkdown();
    }, [params]);

    return (
        <div className="bg-background text-foreground p-6 m-16 rounded-lg shadow-lg">
            <article
                className="prose lg:prose-xl"
                dangerouslySetInnerHTML={{__html: content}}
            />
        </div>
    );
};

export default BlogPage;
