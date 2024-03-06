# Code Generation

With code generation, a developer writes a comment in natural language giving specific and concise requirements. This information, alongside the surrounding code including other open files in the editor, act as the input context. CodeWhisperer returns a suggestion based on this context.
Amazon CodeWhisperer is trained on billions of lines of Amazon internal and open source code. This gives CodeWhisperer an advantage when it comes to making suggestions for using AWS native services. In the example below, CodeWhisperer understands from the input context that we want to create a handler for an AWS Lambda function, and suggests a correct signature and function implementation.

![CodeWhisperer Lambda Function](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ir1ts5sw5uhrlneui1hy.gif)

There are techniques to help you generate the best recommendation, and you can find out more details in this blog post on [Best practices for prompt engineering with Amazon CodeWhisperer](https://aws.amazon.com/blogs/devops/best-practices-for-prompt-engineering-with-amazon-codewhisperer/).