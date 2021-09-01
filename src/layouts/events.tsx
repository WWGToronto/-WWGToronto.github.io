import * as React from 'react';

import {
  Header,
  EventInfo,
  Footer
} from '../components';

export class Events extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'pt5'}>
        <Header />
        <div className={'pt5 bg-near-white dark-gray'}>
        <div className={'flex flex-column items-center justify-center cover pa5'}>
          <h1 className={'f1 fw1'}>Upcoming Events</h1>
          <h3 className={'f4 fw1'}>For a full list of past and upcoming events please visit our <a href={'https://www.meetup.com/women-who-go-toronto/events'} className={'link gray dim'}>meetup</a> page</h3>
        </div>
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={1}
            month={'Sep'}
            year={2021}
            title={'Coding Club: Find a running median'}
            content={'This event is for the participants of our August 2021 contest to discuss their learnings about implementing an algorithm to find a running median. Please feel free to join us even if you haven’t submitted your response but are interested in the conversation.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/279736848'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={25}
            month={'Aug'}
            year={2021}
            title={'Reading Club: Let\'s build a Full-Text Search engine'}
            content={'The article for this reading club is Let\'s build a Full-Text Search engine. The author, Artem Krylysov, is an engineering team lead at Datadog. His blog (https://artem.krylysov.com/blog) covers various topics from everyday programming tips to his travel adventures. The articles walks through the steps to build a simple but practical Full-Text Search (FTS) engine in Go; one that is capable of searching millions of documents in less than a millisecond, and can handle different types of search queries, from simple word searches to more sophisticated boolean ones.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/280081132'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={19}
            month={'Aug'}
            year={2021}
            title={'Reading Club: Inlined defers in Go'}
            content={'The article for this reading club is a short blog post by Jaana Dogan on Inlined defers in Go. Janna is a principal engineer at Amazon Web Services (AWS). She is working on monitoring, observability and performance. Before AWS, she worked on different products at Google, including the Go Programming Language. In her blog (rakyll.org), she provides useful everyday practical tips about Go programming language ecosystem. The article summarizes how the Go defer function works and walks through the changes in the performance of this function throughout the years. It recommends listening to a relevant episode of the GoTime podcast as an additional resource.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/280080819'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={28}
            month={'Jul'}
            year={2021}
            title={'Reading club: Web Security & Go (Error Handling and Logging)'}
            content={'The article for this month\'s reading club is 1.8 Error Handling and Logging, which is part of a longer report written by the OWASP Foundation called Web Application Secure Coding Practices, The Go Language Guide. This topic was inspired by learning that the Go language is one of the popular languages used by cyber criminals in 2020. In this event, we\'re going to cover error handling and logging which are essential parts of application and infrastructure protection. When Error Handling is mentioned, it is referring to the capture of any errors in our application logic that may cause the system to crash, unless handled correctly. On the other hand, logging highlights all the operations and requests that occurred on our system. Since attackers often attempt to remove all traces of their action by deleting logs, it\'s critical that logs are centralized.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/279515097'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={7}
            month={'Jul'}
            year={2021}
            title={'Coding Club: Implementing a Trie in Go'}
            content={'This event is for the participants of our June 2021 contest (linked below) to discuss their learnings about implementing a trie in Go. Please feel free to join us even if you haven’t submitted your response but are interested in the conversation.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/279091757'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={30}
            month={'Jun'}
            year={2021}
            title={'Reading club: Web Security & Go (Input Validation)'}
            content={'The article for this month\'s reading club is Input Validation 1.2, which is part of a longer report written by the OWASP Foundation called Web Application Secure Coding Practices, The Go Language Guide. This topic was inspired by learning that the Go language is one of the popular languages used by cyber criminals in 2020. In this event, we\'re going to dive right into the beginning of the report that discusses user input and its associated data as a security risk if left unchecked. It is suggested that "Input Validation" and "Input Sanitization" should be performed in every tier of the application, according to the server\'s function. Also referenced in this section is the Input Validation checklist from the OWASP Secure Coding Practices Guide.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/278557652'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={26}
            month={'May'}
            year={2021}
            title={'Reading club: Why Generics?'}
            content={'The article for this reading club is Ian Lance Taylor’s blog post, “Why Generics?“. Since the proposal for adding generics to Go was approved and is anticipated in the Go1.18 beta, let us dive into why it was proposed in the first place. The focus of the article and talk is “why”, with a little bit of “how”. Why do Go developers want generics? What do developers currently have to do in order to work around the lack of generics? Ian Lance Taylor favours including Generics into Go. From your own experiences, do you agree or disagree with him? Has there been a time where you wish Go had generics? Have you worked in a language where generics made your development more difficult?'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/278126038'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={21}
            month={'Apr'}
            year={2021}
            title={'Trivia Night'}
            content={'The next event for Women Who Go Toronto is “Golang Trivia Night”. Join us in this informal, fun event where you will battle to see who has the greatest knowledge of completely useless Golang facts! Categories include “Simply not simple”, “Who done it?”, “Learn the Lingo”, “Why do you know that?”, And “Why would they do that?”. No prior Go knowledge is required and the points don’t matter. That’s right, the points are like an office building in a pandemic: still there, but completely unusable.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/276897232'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={7}
            month={'Apr'}
            year={2021}
            title={'Reading club: Go is not an easy language'}
            content={'The article for this reading club is Martin Tournoij’s blog post “Go is not an Easy Language”. Tournoij has been working in Go for the last 5 years. This post from earlier in the year had a number of active discussions on Hacker News, Lobsters, and various programming subreddits.The article offers the perspective that Go, despite having a straightforward syntax, is not an easy language to learn or to use. It’s likely you’ll go wrong (ha ha) in subtle ways and barriers to entry are hard to make out behind the promise that it is “easy”. Tournoij argues that languages are about ways of thinking, more than they are about grammar and primitives. Beyond A Tour of Go, where do we go to learn Go thinking?'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/277071882'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={24}
            month={'Mar'}
            year={2021}
            title={'Reading Club: Failure is your domain'}
            content={'The article for this reading club is "Failure is your domain". The author, Ben Johnson, is an open source software developer specializing in databases, analytics and distributed systems. He is the creator of BoltDB (a key/value store written in Go). He has published a number of interesting Go-related articles, including a "Go Walkthrough" blog series. The article focuses on error handling in Go. It argues that errors and their consumers need to be considered throughout the entire design process to make sure our application behaves properly when unexpected things happen. The article then show us how to design our application errors to fulfill the needs of different error consumers.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/276698742'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={24}
            month={'Feb'}
            year={2021}
            title={'Reading club: How I write HTTP services after eight years.'}
            content={'The article for our second reading club is "How I write HTTP services after eight years". In this article, the author, Mat Ryer, highlights some very important factors to help build clear and concise HTTP services. As an early adopter of Go, Mat Ryer has been building Go HTTP services for a long time and has changed his approach along the way based on his learnings. This article went viral when it was first published in 2018. It was the most clicked link in the Go weekly newsletter that year. The post was shared on reddit at the time and resulted in a lot of feedback and suggestions that was then incorporated by the author into his talk at GopherCon 2019. Mat Ryers is an open source enthusiast who has been contributing to several Go libraries, including the popular testing toolkit stretchr/testify. He is the author of the Go Programming Blueprints book and has been hosting the popular GoTime podcast.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/276294245'}
          />
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={20}
            month={'Jan'}
            year={2021}
            title={'Reading club: Go best practices, six years in'}
            content={'Let\'s start off simple with a single article for a nice introduction! The article we are going to read is "Go best practices, six years in" by Peter Bourgon. The author, Peter Bourgon, has previously worked at SoundCloud and Weaveworks and is now a Principal Engineer at Fastly. This article was published in 2016 as an adaptation to a talk from 2014 and is included in the popular Gopher Reading List. This article goes over an array of practical topics like testing, IDEs, program design, formatting, and more. The writing isn\'t as prescriptive as you might initially assume it would be and presents the information more like observations and learnings.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/275055127'}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
