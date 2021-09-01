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
            content={'This event is for the participants of our August 2021 contest (linked below) to discuss their learnings about implementing an algorithm to find a running median. Please feel free to join us even if you haven’t submitted your response but are interested in the conversation.'}
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
            content={'The article for this reading club is a short blog post by Jaana Dogan on Inlined defers in Go. Janna is a principal engineer at Amazon Web Services (AWS). She is working on monitoring, observability and performance. Before AWS, she worked on different products at Google, including the Go Programming Language. In her blog (rakyll.org), she provides useful everyday practical tips about Go programming language ecosystem. The article summarizes how the Go defer function works and walks through the changes in the performance of this function throughout the years. It recommends listening to a relevant episode of the GoTime podcast (linked below) as an additional resource.'}
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
        <Footer />
      </div>
    );
  }
}
