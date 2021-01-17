function developersFacts () {
  return {
    getAuthorDetailsClasses (fact) {
      return (
        fact.color +
        ' text-white p-4 md:p-8 rounded-b-xl md:flex md:items-center justify-between'
      )
    },
    facts: [
      {
        author: 'Franklin Okolie',
        role: 'Software Engineer',
        quote:
          'Software engineering is not all about writing code but more of how you solve a problem.',
        image: 'img/Franklin.jpg',
        color: 'bg-pink-600',
        github: 'https://github.com/DeveloperAspire',
        twitter: 'https://twitter.com/DeveloperAspire',
        facebook: 'https://www.facebook.com/silvia.frank.58173'
      },
      {
        author: 'Eunit',
        role: 'Frontend Developer',
        quote:
          'The more you know, the more you know there are more you need to know.',
        image: 'img/eunit.jpg',
        color: 'bg-blue-600',
        github: 'https://github.com/eunit99',
        twitter: 'https://twitter.com/eunit99',
        facebook: 'https://www.facebook.com/eunit99'
      },
      {
        author: 'Melody Onyeocha',
        role: 'Frontend Developer',
        quote:
          "In programming, as long as you're getting a new error message, you're learning.",
        image: 'img/melody.jpg',
        color: 'bg-red-500',
        github: 'https://github.com/Melocoder',
        twitter: 'https://twitter.com/Melocoder',
        facebook: 'https://www.facebook.com/Melocoder'
      }
    ]
  }
}
