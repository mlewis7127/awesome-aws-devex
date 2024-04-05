# Application Understanding
One of the most valuable use cases for GenAI is helping to understand existing applications. A common problem is supporting an application with limited if any documentation, written in an unfamiliar programming language or style, and with no comments in the code.

## Explaining Code
Working in combination with CodeWhisperer in your IDE, you can send whole code sections to Amazon Q and ask for an explanation of what the selected code does. To show how this works, we open up the file.rs file cloned from this [GitHub repository](https://github.com/rust-lang/docs.rs/blob/master/src/db/file.rs). This is part of an open source project to host documentation of crates for the Rust Programming Language, which is a language we are not familiar with.

We select a code block from the file, right-click, and then send to Amazon Q to explain:

![Amazon Q Explain](./AmazonQExplain.png)

Amazon Q provides a detailed breakdown of the function that has been written in Rust, and the key activities that it carries out. What is really useful in this case, is Amazon Q suggests follow up questions to help you get an even better understanding of the code. This allows you to chat with and ask questions about the code segment:

![Amazon Q Explain Output](./AmazonQExplainOutput.png)

