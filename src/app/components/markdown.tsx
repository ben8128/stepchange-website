import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { kebabCase } from "lodash";
import clsx from "clsx";
import { useMemo } from "react";
import Photo from "./photo";

export default function Markdown({
  className,
  children,
  sectionTitles,
}: {
  className?: string;
  children: string;
  sectionTitles?: any[];
}) {
  const MarkdownMemo = useMemo(() => {
    return (
      <div className={clsx(className, "markdown relative")}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, remarkGfm]}
          components={{
            button: ({ node, ...props }) => (
              <button
                className="mt-2 bg-blue-600 hover:bg-blue-700 inline-flex items-center px-6 py-3 font-semibold font-sans rounded-md text-white transition-colors"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                target={props.href?.slice(0, 1) !== "#" ? "_blank" : undefined}
                rel={props.href?.slice(0, 1) !== "#" ? "noopener noreferrer" : undefined}
                {...props}
              />
            ),
            h1: ({ node, ...props }) => {
              // Extract text content from children
              const getTextContent = (children: any): string => {
                if (typeof children === 'string') return children;
                if (Array.isArray(children)) return children.map(getTextContent).join('');
                if (children?.props?.children) return getTextContent(children.props.children);
                return '';
              };
              
              const textContent = getTextContent(props.children);
              const id = kebabCase(textContent);
              const section = sectionTitles?.find(({ title }) => textContent === title);
              
              // console.log('H1 Generated:', { id, title: textContent, section });
              
              return (
                <div className="lg:flex items-end">
                  {section?.icon && (
                    <div className="relative lg:-ml-36 mr-8 w-20 h-20 -mb-12 lg:-mb-32 lg:w-28 lg:h-28 flex-none">
                      <Image
                        alt={`Icon for section ${section.title}`}
                        src={typeof section.icon === 'string' ? section.icon : section.icon.src}
                        fill
                      />
                    </div>
                  )}
                  <h1 id={id} {...props} />
                </div>
              );
            },
            h2: ({ node, ...props }) => {
              const getTextContent = (children: any): string => {
                if (typeof children === 'string') return children;
                if (Array.isArray(children)) return children.map(getTextContent).join('');
                if (children?.props?.children) return getTextContent(children.props.children);
                return '';
              };
              const textContent = getTextContent(props.children);
              return <h2 id={kebabCase(textContent)} {...props} />;
            },
            h3: ({ node, ...props }) => {
              const getTextContent = (children: any): string => {
                if (typeof children === 'string') return children;
                if (Array.isArray(children)) return children.map(getTextContent).join('');
                if (children?.props?.children) return getTextContent(children.props.children);
                return '';
              };
              const textContent = getTextContent(props.children);
              return <h3 id={kebabCase(textContent)} {...props} />;
            },
            h4: ({ node, ...props }) => {
              const getTextContent = (children: any): string => {
                if (typeof children === 'string') return children;
                if (Array.isArray(children)) return children.map(getTextContent).join('');
                if (children?.props?.children) return getTextContent(children.props.children);
                return '';
              };
              const textContent = getTextContent(props.children);
              return <h4 id={kebabCase(textContent)} {...props} />;
            },
            img: ({ node, ...props }) => {
              return (
                <>
                  <Photo src={props.src} alt={props.alt} />
                  <span className="font-sans w-full text-sm text-center mt-2 mb-4">
                    {props.alt}
                  </span>
                </>
              );
            },
            table: ({ node, ...props }) => {
              return (
                <div className="overflow-x-auto">
                  <table {...props} />
                </div>
              );
            },
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    );
  }, [children, className, sectionTitles]);

  return MarkdownMemo;
}