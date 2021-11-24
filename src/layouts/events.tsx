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
            day={24}
            month={'Nov'}
            year={2021}
            title={'Reading club: Scheduling In Go : Part III - Concurrency'}
            content={'In this reading club, we will continue our discussion on schedulers and concurrency. We will discuss part III of the "Scheduling in Go" article series by Ardan Labs, a software engineering firm focused on providing Go training for other companies. The author, William Kennedy, is a managing partner of the firm and a founding member of GoBridge. He helps individuals and groups to level up their Go knowledge and coding skills.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/282165818'}
          />
          <EventInfo
            day={26}
            month={'Jan'}
            year={2022}
            title={'Reading Club: Effective Go - Part I'}
            content={'For this reading club, we’ll be starting Google’s very own Effective Go, which is a foundational resource for Go developers to learn how to write clear and idiomatic Go code. Google maintains this guide to augment the Go language spec and their Tour of Go interactive tutorial. Effective Go is frequently cited as required reading for using and understanding Go. Nobody wants to be the person who never quite understood something like slices.'}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/282169750'}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
