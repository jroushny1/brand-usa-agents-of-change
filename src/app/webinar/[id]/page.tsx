'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, Clock, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import HLSPlayer from './hls-player'
import AccessCheck from '@/components/AccessCheck'

// This would come from your database
const webinarData = {
  'intro-ai-agents': {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies. This comprehensive introduction covers the four types of AI agents (Operator, Researcher, Builder, and Automator), demonstrates real-world tools, and explores the future of agentic AI in destination marketing.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    transcript: `I am the SVP of Innovation and Chief AI Officer for Brand USA. Today I am going to share with you an introduction to AI agents.

As a quick reminder, I want to just let you know once again what my AI agenda is at Brand USA. The image is Pika.art. It has a lot of free options available for attention getting graphics like this. It's really the only funny trick that you're going to see in this entire presentation. I'm hoping everything else will be very practical and useful for you.

In my role at Brand USA, I'm here to ensure there's operational excellence at the company. So I am working to help our staff take advantage of the benefits of generative AI and then taking what we are learning internally and using that for industry empowerment.

That's what this webinar is right now. It's sharing what we are learning for the benefit of the US tourism industry. And then finally the third component of my agenda is traveler experience enhancement. What are we doing with AI tools to make the United States more discoverable and more bookable by international visitors and meeting planners?

Let's go right to the meat of what we're talking about today, AI agents. What is an AI agent? This is something that gets convoluted because you have product people, the people who are building these tools for AI labs, thinking of agents as one thing. You have the marketers for those companies perhaps throwing the title of agent on every single thing that they touch. Agents are going to mean something different for us as the tourism professionals who are using them. But what it all comes down to is that this is software that can understand a goal and then figure out ways of achieving that goal.

Trying to come up with different ways to group agents, this is what I have landed on, thinking of agents either as something that is going to operate your computer for you, will do research for you, will build something for you, or will automate something for you.

I'm going to walk through each of those four buckets, and the types of tools that live in these categories, and things that we as tourism professionals can do with each of these agents. And then look at what this could mean for the future of work.

Starting with the operator bucket, what the tools in this bucket have in common is that it is like taking your mouse and handing it to the agent and saying, I'm done. You go give it a shot. And this is, as are all of these categories, something that is changing rapidly. So only about a week ago ChatGPT updated the agent that they have in their ecosystem. OpenAI has updated this, and this is just screenshots from me using this tool for my own agentic process or research project. So here, I chose Kansas City for this example because I'm from Kansas City.

So I was hoping something might sound familiar and I could root out any hallucinations as they popped up. So here I'm asking it to identify 50 businesses that could be a member of Visit Kansas City but isn't, and how they could benefit from DMO membership. Find contact information, any trends in these sectors, and please don't give me businesses that wouldn't work for membership.

It came back and asked for a little bit of clarification. So these agentic models, typically, they don't want to go out and do a lot of work without confirming that this is the work you are looking for. And then this example you'll see here at the top, it worked for 59 minutes to look at a variety of different websites.

It pulled a little bit of detail about about Kansas City, Missouri's tourism economy. And then it gave me this list of 50 businesses, which like some of them were restaurants and I think restaurants would be easy, low hanging fruit for this tool to look at. But it also, found a couple of escape rooms. Somewhat upsettingly, it hallucinated some options. So at the end of the list you could tell that it was really working hard to be unique. One of the examples was an organization that offers sewing classes and has sewing clubs, which I thought that was a really interesting idea for a DMO to bring into their membership, right?

Real company. But there was another company that was a venue that was providing lawn games, like an indoor lawn game experience, completely fabricated. Gave it a street address, gave it a name, completely does not exist. So it's a good note to make that these agentic systems are still not perfect.

They still have many of the issues that we see in using standard AI chat bots, but in terms of me looking through a list of 50 things and being able to quickly say, okay, that doesn't exist and that doesn't exist. It would be much faster to remove the hallucinations than to generate the list of 50 ideas to begin with.

Then if I wanted to make this process even more agentic and let the system do the next step, I think the next step would probably be reaching out to those businesses with a pitch to become a member of Visit Kansas City. And so I asked it for ideas of what could that pitch email look like.

Then in the future, what these systems would be able to do is then take that pitch email, go into your email platform, and actually send out the email to the prospective business. So that's the type of work that Agentic AI is going to be able to help us with in the future.

This is now a second example of an operator type agent. This is from a website called Manus. I do not recommend that you use this for very detailed work projects because it is a Chinese company. And so one of the things I like to remind people is that if something's free, we are the product.

And I have a free account for Manus.im, so me and all of the information I feed into this is the product, right? I haven't looked at the terms of service, but as a Chinese company, be careful when you are doing anything with confidential or proprietary work information and putting it into these websites that you understand what is happening with it after you are done using it.

In this example, I was able to say, go to this website, look at the brand, how the brand appears on the website, and then create social media icons specifically around AI that I would be able to use in PowerPoint presentations. And so Manus, again, it restates what it sees the request being, it spells out the steps in Manus, you are able to jump in and correct it in real time, rather than it giving you a plan of attack. And then you review the plan of attack and then give it the go ahead. It will shift in the middle of the session if you interrupt it to give it additional information.

But here it again, it opens up a little browser so you can watch it browsing the internet, it went to TheBrandUSA.com, clicked through a few pages to see what our color structure looked like, and then thought about what the icons should be in order to create them here.

And then these are individual icons that I have downloaded from Manus.im and uploaded to my presentation. That is just one small example of the type of thing that you could do with Manus. And I felt okay doing this with BrandUSA, because the website itself, that's public, right?

There's nothing secret or proprietary about colors that we use.

And then this is the third example in the operator series. This will work differently than the first two examples, but it is in this category because it is AI essentially taking over your mouse or taking over your keyboard to do something for you. Browse.ai is a tool that you can use to scrape websites.

I'll say as an example, when I used to work on Broadway, we wanted to keep an eye on how ticket scalpers were pricing tickets for the shows that we represented. I worked on Harry Potter and the Cursed Child on Broadway and oversaw all of its ticketing.

We would scrape various Scalper websites to see which seats they had access to and what prices were they selling them for so that we could use that information to inform our own pricing strategy. A tool like browse.ai can help you do that, whether it's extracting structured data, and I'll show you how that works.

Or monitoring website changes.

The way that this particular site works, you sign up for an account, and then in this example, let's say I wanted to go to the Kansas City Chamber of Commerce website and just keep an eye on if they get any new, businesses signing on that could possibly, become a member of the DMO. Here I am giving it the URL that I want it to scrape, and then it opens up an interactive screen where you can actually, you tell it what data you want to extract. And what we want to do is to capture the text of all of the restaurant members, let's say, of the Kansas City Chamber of Commerce. So you tell it capture text. Then it, because it's AI, it can read the website and understand what the website is.

It knows the website is a list of 23 restaurants, and it knows the list is, it's going across and down. It's a grid, right? So when you tell it, yes, you have correctly determined what the list items are, it will then pull everything out of that list and then put it into columns for you. And then here I've deleted out a couple of the columns, so I didn't need to have the name of the business twice.

I didn't need to have the text for send email or visit website. But I did want to have the website address for each of those restaurants. And then there's a way in this system, again, because it's AI, it understands how the website is set up. If it needed to look at multiple pages in order to extract results, you can tell it where the next page tab button is.

And down here you would set that up and it would open up the page again, and you actually click on the next page tab.

So those are the examples of operator agents. Now I'm going to move on to researcher agents. These are tools that go deep into online resources to gather, analyze, and synthesize complex information so that you can have clear insights as a result of that. Probably the best example I know of this is currently the version that is in ChatGPT.

All of the major models have some version of deep research. If you have a paid version of ChatGPT you'll be able to just click on the telescope in order to activate deep research. There is a similar widget inside of Google Gemini that allows you to do deep research. Claude just call theirs research, but it's situated in the same area on the omni bar.

So for this example, I wanted to do a competitive analysis of 30 national tourism organizations and what is their positioning for business events globally so that I could understand what is the positioning of the United States currently in that market and what are we going to be competing against for hosting meetings in the United States. I outlined, "I want this comprehensive competitive analysis. I want to understand their unique selling proposition, their brand promise taglines that they have, one that is specific for business events, that top international markets." And then over here you can see the very beginnings of the response that I got back from ChatGPT.

I gave it this assignment, it came back and asked clarifying questions, then I answered those questions. It went away and thought for 30 minutes. And then as one example, it came back and said, for Business Events Australia, this is their unique selling proposition to this market.

Here's the brand promise. Taglines. What budgets looked like for recent events. Do they offer any incentives for the meeting planners? So a lot of information. The final report here, because I'd asked it to look at so many markets, was very long. But in terms of me being able to sit down and digest, what does this entire landscape look like?

It was really interesting and very useful, and you can take that report and you can then ask ChatGPT to give you an executive summary so that you can get to the crisp insights more quickly.

This is a quick snapshot of what the same functionality looks for Google's Gemini.

All right, the next category is going to be the Builder. These are AI enhanced tools that will take a text description from you and turn it into a fully functioning digital product without needing to be an expert or a program.

This is lovable. Over here on the left, I'm giving it a prompt for the type of website that I'm looking for. And then over here on the right, that's all of the code for actually building that website. One way that I've used this recently was ahead of IPW. I was delivering sessions in our booth for the attendees, to provide some education on AI.

And I wanted people to be able to see what workshops I was offering and to be able to register for a seat at one of them. So this is what the final product looked like. What's great about this, is I went to Lovable and said, I need a website that will take registrations for these sessions.

And I gave it a list of sessions and it built all of this based off of one prompt. It took me probably two hours to do the entire thing, but most of that was changing how this registration piece worked, adding in this header or adding this wait list functionality. Spent tweaking different little aspects of it, but overall for it to create an interactive website that allowed somebody to enter their name and email address and sign up for a session and have a backend where I was able to log to a database and see everybody who had registered for each session.

I cannot believe how easy this was, and I used the free version of Lovable. So I am sure with the paid version you're going to see even more bells and whistles. And what I like about this is it takes something that used to be, gate kept this. This used to be something that you had to be a developer in order to be able to build, and now it's something that is accessible to a much wider range of people.

I think that's really cool.

Another tool that you can use that is a builder tool for creating these, mini apps is Claude Artifacts. So Claude, is made by a company called Anthropic, and it's a chat bot that is a competitor to ChatGPT or Google Gemini. At Brand USA, we have subscriptions for both ChatGPT and for Claude, because Claude works a little differently.

I can get better ideas sometimes out of it than I do out of ChatGPT, and it has this interactive artifacts creator. So you can see down here, this is the prompt that I gave to Claude, that I wanted a Pomodoro timer that has responsive design. It has a work mode and a break mode, and I wanted one small feature that could induce delight, which is when it runs out of time, you see the little pop of confetti, which was better than nothing, I guess.

You could upload results from a recent ad campaign and ask for an interactive dashboard of those results that would reveal insights that you can't see otherwise.

You could give that as a prompt to Claude and it would open up a separate screen and create an artifact for you. It uses a programming language called React to create all of these interactive elements and there are lots of examples online- I would say Ethan Mollick, if you follow him on LinkedIn or subscribe to his newsletter, he shares on LinkedIn a lot of small artifacts that he makes with Claude, he does a lot of world building games, so you can get much more complicated than a simple Pomodoro timer when you're using Claude artifacts.

And then the final group of these tools is the Automator. These are AI agents that connect different apps and workflows together, so that you are eliminating repetitive manual steps. One example of this is a tool called N8N. What these tools do is imbue your workflow with AI, which means you have to understand what your workflow looks like.

This is showing the workflow for automating having a new hire come on board. Once you submit a form for "create a new user", that form then goes and it shows you here, literally in this tool, work with this type of screen in order to say, okay, this is when I want the tool to call on an AI tool, call on an LLM with a prompt, and then this is what I want you to do with the result from that. We get this user form. We ask questions like, is this person a manager? Yes. They go through one workflow. No, they go to a different workflow. So this exists already today prior to AI, robotic process automation.

Tools like Zapier allow you to connect different activities together and automate those activities. What's different with the AI piece, this visual from N8N, as you see where in the middle of the workflow, you say, oh, actually there's an opportunity here for, rather than somebody saying yes, they're a manager, the AI agent can read the form and understand if that person is a manager or not, based on their duties, and then put them along the correct workflow as a new employee.

Now this is a agentic tool that I like a lot. This is called Agent.ai and it was created by one of the co-founders of HubSpot. I think there is a lot of opportunities with a tool like this.

So Agent.ai, free account. This is an example of an AI agent that I have created. You give it a LinkedIn URL. In this example, it is for a business event planner, and this agent will analyze that LinkedIn profile to deliver sales intelligence for DMOs.

Let us know key selling points, decision making patterns, personalized approaches that will align the destination strengths with the planner's specific needs. This what it looks like if you are a user of the agent and then on the backend in order to create it, this is, I've just clicked a button that says Build New Agent.

And these are the four different areas where you are going to tell Agent.ai how your agent will work. What's the name of the agent? What's the description? You saw that on the previous screen. That's what's appearing to the public. The rest of this, honestly, if this is an agent just for you, none of it really matters because this is how it shows externally if you were to share it.

This is where you actually build the agent. All of these things work as a workflow, and so when I talk about understanding what our workflows are, this is why it's important. As agentic AI becomes easier for all of us to access, we'll understand what steps in our processes can be replaced or augmented by AI.

To get insights from about a business event professional using their LinkedIn profile, this AI agent is going to take five steps. The first step is, it's going to get input from me, the user, which is enter the LinkedIn URL of the planner. That's what the user sees, and then you give it a name when you save it, then the second step is you want to get the actual information.

It takes this LinkedIn URL. It's going to get data from LinkedIn and save it as LinkedIn data. Then it's going to get activity from LinkedIn and save it as LinkedIn activity. And then the fourth step, this is this is the actual AI part.

We are using GPT-4.5 to look at all of this data and analyze it. This is where it takes the last 25 posts that this user wrote.

It's going to then put it into GPT-4.5. It's going to use ChatGPT with a prompt that I gave it that said, "read all of this and let me know essentially everything that I put in this agent. And then the final step, the fifth step is that we want the output in markdown format so that we can actually read and use it.

This is one of the steps. This is actually the very first step. So getting text, this is the prompt that the user sees. You can give them examples of the type of text they can enter. Then you name that output because it's going to become an input in a later step. This is what the ChatGPT step looks like.

So here it's going to 4.5. And it's just reading this prompt. And the prompt is I'm providing you with somebody's LinkedIn profile and their posts. Give me a detailed summary of what destinations they like, if it's mentioned, and what a good sales approach might look like. Conclude with one surprising insight about the planner.

And then this is where I have put in my two selections I wanted. Profile data, that's one of the outputs from LinkedIn and the posts that was the second output from LinkedIn. And then the output from this prompt, that's what it's going to save is the output summary so that it can then deliver that to me in the next screen.

And then this is the example of what the output looks like. Here we're just seeing the tail end of what this report looked like. If I were to have a meeting with this person, I'd find it really interesting to have all of these insights, and I would be very glad to not spend a lot of time on LinkedIn to actually copy and paste all 25 posts and put it in here.

Again, this is an AI agent that is helping to automate something. In this case, it's automating reading a bunch of LinkedIn posts and then understanding how my destination could sell to this person. If we wanted to make it even more agentic, if we wanted to add another step in here that we don't have to personally do, these were the four different categories to building your agent. You can go to the trigger and then you can set up a trigger for when this happens. I haven't done this because this is the free version. It's not tied into our systems at Brand USA, but there is a world, 'cause you can see, like HubSpot is completely integrated into this system because it's from the co-founder of HubSpot.

If we happened to use HubSpot as our CRM, you could say, great, every morning, look at my calendar. Or I could send an email to this agent saying, here are all of my meetings for today. Or we could say, oh, every time a new contact is added into HubSpot, use this information to look up what their LinkedIn profile URL is, and then run this agent. Right now it's manual only, but if it were on a daily schedule, I could say "every morning at 8:00 AM email me this summary for each one of the meetings that I have today."

That's a way in which this agentic AI workflow becomes useful for an organization. Then this is a different type of automation from Google Gemini. This is an email I actually got from Gemini this morning about Gemini's Gems. Gems are pre-written prompts inside of Gemini. In ChatGPT those are called custom GPTs. And this particular pre-written Gem offers to make you a work brief every morning. We don't use Gemini at Brand USA, so this is connected to my personal Gmail and I don't really use the calendar functionality.

These were the only two things that were on my Google Calendar. Here I have a reminder about something for this presentation and something I wanted to remember to do tonight.

I didn't even know I had tasks in my Google email, but, apparently five or six years ago I wanted to remember to buy Claritin. I hope I got it. And then just a couple of random FYIs that it pulled from my Gmail. And then it offers to customize this for me. This outreach where it pushes information to you in ChatGPT, it's called Tasks. Clearly this came today. I have not started receiving these emails yet, so I'll be curious how the rest of the week goes. But again, this is an example of something that I have now automated with Gemini and think about how useful this would be if it was connected to my outlook and setting me up every single morning with this full list of everything that we do.

Let's talk briefly about how agents are going to evolve and how our work with agents will evolve. By 2027, our employees are going to be in charge of agents that are doing some component of our work for us.

You can see where a data analyst could supervise AI agents that are processing visitor patterns or spending habits or sentiment analysis. That there's just going to be robots collecting information and doing things for us, that then needs to be collected and synthesized, or you have to do something with that information.

That's going to allow our impact to be multiplied. Then employees, we could almost think of them as strategic directors of AI assistants. Now where this is going to move, I think by five years from now, is that these agents won't necessarily be standalone agents. The agents are going to be able to work with each other and the agents, as you can see here, the idea of a supervisor agent that has a task and that it will then take that task and disseminate it to other agents that will do individual pieces of the task, bring it back to the supervisor agent, who then generates this solution. If you wanted to think about how would that work for an actual department at a DMO, if you wanted to think about having community management inside of your DMO, you could have agents that are tracking local sentiment. Outline what social media networks you want that agent to monitor. Do you want it to be on an app like NextDoor to see are people complaining about tourists or complaining about home rentals in their neighborhood?

You could have communication agents that take that information and then draft emails to go out to stakeholders. You could see data agents that are creating not just an overall economic impact report, but customizing it for subsets of your constituents. We could have feedback agents that are going out to our membership or to our partners asking for feedback on our work.

There could be resource agents that are matching what stakeholders need with the programs that DMO have to offer to those stakeholders. That a swarm could be multiple agents in each one of those tasks collecting this information so that we as the humans have better info and data to go from, and we are doing the people part of the job.

That is all meant to arm us so that we can have more effective conversations with those stakeholders. I don't see this taking the human out of the loop. What this is doing is empowering the humans to have the best possible information to go and then actually do this work.

And it removes the need, ideally, for humans to sit searching on the internet for six hours, looking for restaurants that might have opened up in your city. It allows the people to do what people are best at, and I like that vision of the future a lot. Right now, many of these things would involve a manual handoff, but that will become agentic as well.

We will see steps moving along a chain where it's AI helping to move the steps along, and it will be one of the roles of leaders at DMOs to actually design what set of agents do you need? What set of tasks do you want to accomplish, and what swarms do you want to establish in order to make that happen?

This is the reminder that I had put in that earlier on my Google tasks for the day. I think everything will ultimately come back to personal AI. Whatever version of ChatGPT I have on my phone, assuming it's ChatGPT, that this will become my favorite tool.

It'll become the one that knows my voice and my needs and is connected to all of my systems. I will want to do something like plan a trip and let's assume that ChatGPT is fully agentic in the year 2030. Instead of me using text to communicate with it, it will be able to go out and do steps on its own.

But it needs a source of truth in order to give me the best answer, because we know that hallucinations, that's still a problem with AI agents because they're a feature, they're not a bug of working with AI. AI agents in the future, how they will know what truth is going to be through something called model context protocol.

This is a replacement for APIs, I think is the simplest way to explain it. Let's say I wanted to book a Broadway ticket. My mom and my sister are coming to town and I want to see the show that has the best seats, for the best price, on one of three nights, and I'm looking at five different shows.

So that would be 15 different searches right now because of dynamic pricing, every single performance is going to have different availability. Every single performance is going to be priced differently. So I could use an API, right? If I were a programmer, I could write an API that could look at each one of those ticketing platforms and return a result to me.

But what MCP does is where the API would connect something together where it says, okay, look over here, and this is where the ticket price is going to be. Well, AI is smart, so you don't need all of that programming to say this is the ticket price. The model context protocol allows you to create a database where in the database you include the instructions for how to use it.

What does that look like? Let's say I had a database of all of the curb cuts on every single sidewalk in New York City, and I'm a wheelchair user. If I'm coming to New York City and I want to plan a route from my hotel to my Broadway show where there is going to be a curb cut for every single sidewalk, every single crosswalk that I need to enter.

I could tell my version of ChatGPT, use model context protocol to look at this server of curb cuts and route the best path for me to go. It would be able to do that because it's not hallucinating, it's not making up where there are curb cuts in the curb. You have told it, go look at this database in order to get that information. So the same thing could work for the business event industry. If you have a big database with the capacity for every venue in your destination, which we all have some version of that, right? You could take that and build it as an MCP server so that if somebody's planning a meeting in your town, you don't have to worry about, oh, I hope the underlying data inside of ChatGPT is accurate.

Instead, you say, great, this agent will know to go and look at this MCP server for what we consider to be true. That's going to open up opportunities for working with AI and with AI agents in the future because the AI agents are going to be able to review all of the MCP servers that are available and pick the ones that would be best for each task.

I see all of this taking a few years to come together. Somebody could sit down and build a lot of this stuff today, but I don't really see this happening for the next few years as we all continue to learn about AI.

To close this out, I'm going to remind everyone of our AI mantras. Start small to think big because we can't boil the ocean all at once. Even if you are using AI today as fancy email rewriter or Google, it's okay because you are here, you are learning about AI agents.

Even if you're not going to sit down and make an AI agent tonight, by getting these ideas, you start to understand what is possible. I like people to take a top down and a bottom up approach because leadership needs to provide tools and encouragement and permission and guidelines while the people on the ground are the ones that actually know how can AI do specific parts of my job for me.

I also like to tell people lead with wonder because nobody is going to get excited about working with AI if it is only ever about efficiency. I think it is still kind of miraculous that all of this stuff exists. I think one of the great things about AI automation is that automation is not new, but the ability of someone like me who is not technical to be able to build an automation because AI teaches you how to do it, that is new.

Keep ChatGPT or whatever tool you use open on your second screen and just try doing something different with it every day to see, what is it good at, what is it not good at? Because if you wait for a perfect use case, you're going to be waiting forever. And please share your ideas because nobody is going to create a guide for us.

We have to do it ourselves. And it is not cheating when we use AI at work. So please continue playing and exploring with AI.

Our next Agents of Change webinar is going to be on September 15th at 1:00 PM and I'm going to talk about custom GPTs.

All right. I want to thank everybody so much for your time today.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI agents are goal-oriented software that can plan and execute multi-step tasks. They can be categorized into four main "buckets": Operators (who "use the mouse for you"), Researchers (who perform deep analysis), Builders (who create digital products from text), and Automators (who connect different apps).',
      'Practical, accessible tools already exist for non-technical users to leverage AI agents, such as using Lovable.ai to build a website from a prompt or using Agent.ai to create a workflow that analyzes LinkedIn profiles for sales intelligence.',
      'Agents still suffer from hallucinations (e.g., fabricating a business in a research task). The solution is connecting them to a "source of truth"—a verified database—using technologies like Model Context Protocol (MCP), which allows AI to pull real-time, accurate data for tasks like planning accessible travel routes or finding venue capacities.',
      'The future of work will involve employees acting as "strategic directors" of AI agent "swarms." For example, a DMO manager could deploy multiple agents to track local sentiment, draft stakeholder emails, and customize economic impact reports, freeing humans to focus on relationships and strategy.',
      'When using free AI tools, especially from foreign companies (like Manus.im), remember the adage: "If something\'s free, we are the product." Be cautious about inputting confidential or proprietary work information.'
    ],
    topics: [
      'AI Agents',
      'Agentic AI',
      'Brand USA',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Operator Agents',
      'Researcher Agents',
      'Builder Agents',
      'Automator Agents',
      'Workflow Automation',
      'AI Hallucinations',
      'Model Context Protocol (MCP)',
      'Source of Truth (for AI)',
      'Lead Generation',
      'Sales Intelligence',
      'Web Scraping',
      'No-Code AI Tools',
      'Future of Work',
      'Data Privacy',
      'Pika.art',
      'Browse.ai',
      'Lovable.ai',
      'Claude Artifacts',
      'N8N',
      'Agent.ai',
      'Google Gemini Gems',
      'Custom GPTs'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry leaders, Marketing and sales professionals (especially B2B), Business strategists and innovation officers, Non-technical professionals seeking to use AI for practical tasks',
      tertiary: 'Meeting and event planners'
    },
    learningOutcomes: [
      'Define what an AI agent is and distinguish it from a standard chatbot.',
      'Categorize the four main types of AI agents (Operator, Researcher, Builder, Automator) and their functions.',
      'Identify specific, real-world tools to perform agentic tasks like lead generation (ChatGPT), web scraping (Browse.ai), website creation (Lovable.ai), and workflow automation (Agent.ai).',
      'Understand the current limitations of AI agents, such as hallucination, and the importance of using a "source of truth" like a Model Context Protocol (MCP) database.',
      'Envision the near-future of work where employees will manage "swarms" of AI agents to automate complex tasks, shifting the human role toward strategy and oversight.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Attention-getting graphics generator', url: 'https://pika.art' },
      { name: 'Manus.im', description: 'Operator agent for creative generation', url: 'https://manus.im' },
      { name: 'Browse.ai', description: 'Operator agent for web scraping', url: 'https://browse.ai' },
      { name: 'Lovable', description: 'Builder agent for website creation', url: 'https://lovable.dev' },
      { name: 'Claude (by Anthropic)', description: 'Builder agent with Artifacts feature', url: 'https://claude.ai' },
      { name: 'N8N', description: 'Automator agent for AI-powered workflows', url: 'https://n8n.io' },
      { name: 'Agent.ai', description: 'Automator agent for building sales intelligence agents', url: 'https://agent.ai' },
      { name: 'Ethan Mollick', description: 'Expert on Claude Artifacts examples', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'HubSpot', description: 'CRM platform, origin of Agent.ai co-founder', url: 'https://www.hubspot.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Brand USA\'s AI Agenda' },
      { time: 46, title: 'What is an AI Agent? (Software that can understand and achieve a goal)' },
      { time: 70, title: 'The Four Buckets of AI Agents' },
      { time: 94, title: 'Bucket 1: Operator Agents' },
      { time: 118, title: 'Example: Using ChatGPT for DMO lead generation' },
      { time: 158, title: 'Warning: AI agents still hallucinate' },
      { time: 199, title: 'Example: Using Manus.im for creative generation' },
      { time: 266, title: 'Example: Using Browse.ai for web scraping' },
      { time: 337, title: 'Bucket 2: Researcher Agents' },
      { time: 365, title: 'Example: Deep research for a competitive analysis (30 NTOs)' },
      { time: 408, title: 'Bucket 3: Builder Agents' },
      { time: 416, title: 'Example: Building a registration website with Lovable' },
      { time: 464, title: 'Example: Building mini-apps with Claude Artifacts' },
      { time: 504, title: 'Bucket 4: Automator Agents' },
      { time: 511, title: 'Example: N8N for AI-powered workflows' },
      { time: 540, title: 'Demo: Building a sales intelligence agent with Agent.ai' },
      { time: 644, title: 'Example: Automating daily briefs with Google Gemini Gems' },
      { time: 707, title: 'The Future of Work: "Swarms" of Agents' },
      { time: 764, title: 'Empowering humans to do "the people part of the job"' },
      { time: 797, title: 'The Core Problem: Agents Need a "Source of Truth"' },
      { time: 811, title: 'The Core Solution: Model Context Protocol (MCP)' },
      { time: 844, title: 'MCP Application: Accessibility (Curb Cut Database)' },
      { time: 866, title: 'MCP Application: DMOs (Venue Capacity Database)' },
      { time: 910, title: 'Brand USA\'s AI Mantras for Learning' },
    ],
  },
  'ai-101': {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. This comprehensive introduction covers how Large Language Models work, practical prompting strategies, campaign strategy development, AI governance and security, and hands-on ChatGPT setup. Perfect for beginners looking to understand AI fundamentals and start using AI tools professionally.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI is a creative partner, not a fact database. Large Language Models (LLMs) are math-based algorithms that predict the next word; they are not "checking Wikipedia." This means they will "hallucinate" (make things up) and users are responsible for fact-checking.',
      'The best AI prompting is a step-by-step process. Instead of asking for a final product at once (like "write a 6-page paper"), you should break the task into components: ask for thesis statements, then an outline, and then refine each section.',
      '"Priming the prompt" is key to getting factual results. To avoid hallucinations in complex tasks like campaign strategy, you must provide your own "source of truth"—upload your own research (from Google, Perplexity, or documents) into tools like Google NotebookLM or ChatGPT for the AI to analyze.',
      'AI governance is non-negotiable for professional use. Organizations must create AI guidelines, starting with using paid accounts to turn off model training ("Improve the model for everyone"). This prevents proprietary, confidential, or PII (Personally Identifiable Information) from being absorbed into future models, which is a major security and privacy (GDPR) risk.',
      'Start using AI now, even imperfectly. The best way for non-technical users to learn is through daily, practical experimentation (a "bottom-up" approach). Don\'t wait for a "perfect use case"; use it for small tasks like rephrasing emails or writing Excel formulas to build the skills needed to tackle bigger problems.'
    ],
    topics: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Data Privacy',
      'Data Security',
      'Personally Identifiable Information (PII)',
      'GDPR',
      'AI Bias',
      'AI Sustainability',
      'Source of Truth',
      'Priming the Prompt',
      'Custom GPTs',
      'ChatGPT Projects',
      'Google NotebookLM',
      'Perplexity.ai',
      'Pika.art',
      'Destination Marketing Organization (DMO)',
      'AI in Tourism',
      'AI Use Cases'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry employees, Marketing and communications professionals, Non-technical users new to Generative AI',
      tertiary: 'Managers and leaders looking to implement AI tools and guidelines'
    },
    learningOutcomes: [
      'Define what a Large Language Model (LLM) is and how it uses context to predict the next word, rather than pulling from a database of facts.',
      'Apply a step-by-step prompting process to break down complex creative tasks, such as developing a campaign strategy or writing a paper.',
      'Utilize "sources of truth" (like Google, Perplexity, and uploaded documents in NotebookLM) to "prime the prompt" and ground AI responses in factual data.',
      'Configure a ChatGPT account for professional use, including disabling model training (data controls) and creating Custom GPTs for specific knowledge bases (like an expense policy).',
      'Identify and mitigate the core risks of AI in the workplace, including hallucinations, data security, PII/privacy violations, and baked-in bias.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Google Gemini', description: 'Google\'s LLM, including NotebookLM', url: 'https://gemini.google.com' },
      { name: 'Claude (by Anthropic)', description: 'An alternative LLM', url: 'https://claude.ai' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s AI assistant', url: 'https://copilot.microsoft.com' },
      { name: 'Perplexity.ai', description: 'An AI-native search engine for research', url: 'https://www.perplexity.ai' },
      { name: 'Google NotebookLM', description: 'A Google tool for uploading and analyzing source documents', url: 'https://notebooklm.google.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction: Generative AI 101' },
      { time: 91, title: 'What is ChatGPT? (It\'s an interface for an LLM)' },
      { time: 150, title: 'How LLMs work: Predicting the next word (not facts)' },
      { time: 219, title: 'AI is not a database of facts (it hallucinates)' },
      { time: 242, title: 'Getting past the "fear of the blank prompt"' },
      { time: 285, title: 'Use Case: Working with data (Excel formulas)' },
      { time: 344, title: 'Interactive Prompt: "Minnesota\'s winter weather"' },
      { time: 450, title: '"How to cheat": Breaking down a task step-by-step (Iliad example)' },
      { time: 580, title: '"It is not cheating to use AI" at work' },
      { time: 639, title: 'Case Study: Creating a campaign strategy using AI' },
      { time: 687, title: 'Priming the prompt with a "source of truth"' },
      { time: 735, title: 'Using Google and Perplexity.ai for research' },
      { time: 797, title: 'Using Google\'s NotebookLM to analyze sources' },
      { time: 1004, title: 'The "human in the loop" (Writing the strategic positioning)' },
      { time: 1043, title: 'Watch-outs & Governance (Security, Safety, Integrity)' },
      { time: 1110, title: 'Data Security: Use paid versions & turn off model training' },
      { time: 1231, title: 'Data Privacy: Do not upload PII (GDPR / EU AI Act)' },
      { time: 1354, title: 'Risk: Hallucinations (Personal bio example)' },
      { time: 1450, title: 'Risk: Bias (Human bias in training data)' },
      { time: 1524, title: 'Risk: Sustainability (Energy and water use)' },
      { time: 1677, title: 'How-to: Setting up ChatGPT (Customize instructions)' },
      { time: 1798, title: 'How-to: Data Controls (Turn off "Improve the model for everyone")' },
      { time: 1821, title: 'How-to: Model Selector (GPT-4o vs. Reasoning models)' },
      { time: 1935, title: 'How-to: Custom GPTs (App store analogy)' },
      { time: 2027, title: 'Custom GPT Example: Travel & Expense Policy (and how it failed)' },
      { time: 2145, title: 'How-to: ChatGPT Projects (vs. Custom GPTs)' },
      { time: 2274, title: 'Next Steps: Top-down (Guidelines) & Bottom-up (Daily use)' },
      { time: 2326, title: 'Guidelines: How to handle proprietary data' },
      { time: 2450, title: 'The Bottom-up Approach: "You just have to do it"' },
    ],
  },
  'ai-tool-playground': {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams. This comprehensive tour covers the complete AI tool stack: frontier models (ChatGPT, Claude, Gemini), research tools (NotebookLM), image generation (Midjourney), video editing (Descript, Runway, Pika), no-code "vibe coding" platforms (Lovable.dev, Agent.ai, N8N), and presentation tools (Beautiful.ai, Napkin.ai).',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Start with a "Frontier Model" as your base. Instead of chasing dozens of small tools, professionals should get a paid subscription to a core model like ChatGPT, Claude, or Gemini. ChatGPT is the best all-rounder, while Claude is a superior writer and "thought partner."',
      'Specialized tools excel at specific tasks. For factual, "grounded in truth" research, use Google\'s NotebookLM to upload sources and query them. For video editing, Descript allows you to edit by modifying the text transcript. For presentations, Beautiful.ai streamlines design and ensures brand consistency.',
      '"Vibe coding" tools are making everyone a developer. Tools like Lovable.dev (for front-end websites/apps) and Agent.ai (for back-end agentic workflows) allow non-technical users to build functional tools using plain-language prompts.',
      'Security is a non-negotiable for business. Always use paid AI accounts (like ChatGPT Team) to ensure you can turn off model training. Free tools use your data as their product, which is a major security risk for proprietary information.',
      'AI rewards expertise and has a learning curve. AI is not a magic wand. A non-artist will get mediocre images, and a non-coder will struggle with Lovable.dev at first. The human expert\'s role is to learn the tool and then guide, fact-check, and refine the AI\'s output.'
    ],
    topics: [
      'AI Tool Stack',
      'Frontier Models',
      'ChatGPT (OpenAI)',
      'Claude (Anthropic)',
      'Gemini (Google)',
      'Microsoft Copilot',
      'Google NotebookLM',
      'AI Image Generation',
      'Midjourney',
      'AI Video Generation',
      'AI Video Editing',
      'Descript',
      'Runway',
      'Pika Art (Pika.art)',
      'No-Code AI / "Vibe Coding"',
      'AI Agents',
      'Lovable.dev',
      'Agent.ai',
      'N8N',
      'AI Presentation Software',
      'Beautiful.ai',
      'AI Data Visualization',
      'Napkin.ai',
      'AI Governance & Security',
      'Data Privacy',
      'Model Training',
      'AI Copyright',
      'AI Agent Swarms',
      'AI Meeting Recorders (Otter.ai, Granola, Plaud)'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry teams, Marketing and communications professionals, Sales and business development teams, Non-technical professionals looking for a practical "AI tool stack"',
      tertiary: 'Leaders evaluating AI tools for their organization'
    },
    learningOutcomes: [
      'Differentiate between the primary frontier models (ChatGPT, Claude, Gemini) and select the best one for their needs.',
      'Identify specific, task-oriented AI tools for research (NotebookLM), image generation (Midjourney), video editing (Descript), and presentation design (Beautiful.ai).',
      'Understand the concept of "no-code" AI agent builders like Agent.ai and Lovable.dev.',
      'Explain the critical security difference between paid and free AI tools, specifically the importance of "turning off model training."',
      'Recognize the privacy implications of modern AI meeting recorders (Granola, Plaud.ai) that may not provide visible disclosure.'
    ],
    relatedResources: [
      { name: 'ChatGPT (OpenAI)', description: 'Best all-around frontier model', url: 'https://chat.openai.com' },
      { name: 'Claude (Anthropic)', description: 'Superior writer and thought partner', url: 'https://claude.ai' },
      { name: 'Gemini (Google)', description: 'Integrated option for Google Workspace', url: 'https://gemini.google.com' },
      { name: 'Microsoft Copilot', description: 'More secure option for Microsoft users', url: 'https://copilot.microsoft.com' },
      { name: 'Google NotebookLM', description: 'Research tool for grounded, factual analysis', url: 'https://notebooklm.google.com' },
      { name: 'Pika (Pika.art)', description: 'Simple animated video/GIF generation', url: 'https://pika.art' },
      { name: 'Midjourney', description: 'Advanced AI image generation', url: 'https://www.midjourney.com' },
      { name: 'Descript', description: 'Text-based video and audio editing', url: 'https://www.descript.com' },
      { name: 'Runway', description: 'AI video generation and editing', url: 'https://runwayml.com' },
      { name: 'Lovable.dev', description: 'No-code front-end website/app builder', url: 'https://lovable.dev' },
      { name: 'Agent.ai', description: 'Build AI agents with workflows', url: 'https://agent.ai' },
      { name: 'N8N', description: 'Visual workflow automation builder', url: 'https://n8n.io' },
      { name: 'Beautiful.ai', description: 'AI-powered presentation software', url: 'https://www.beautiful.ai' },
      { name: 'Napkin.ai', description: 'Context-aware data visualization', url: 'https://www.napkin.ai' },
      { name: 'Supabase', description: 'Database backend mentioned with Lovable', url: 'https://supabase.com' },
      { name: 'Jasper', description: 'AI copywriting tool mentioned in Q&A', url: 'https://www.jasper.ai' }
    ],
    chapters: [
      { time: 0, title: 'Welcome to the AI Tool Playground' },
      { time: 46, title: 'Janette\'s AI Agenda at Brand USA' },
      { time: 82, title: 'What are Frontier Models? (The "basis" of AI tools)' },
      { time: 119, title: 'ChatGPT: The best all-around tool for DMOs' },
      { time: 160, title: 'Microsoft Copilot: Less powerful, but more secure' },
      { time: 179, title: 'Claude: A "terrific thought partner" and better writer' },
      { time: 232, title: 'Gemini: A strong, integrated option for Google Workspace users' },
      { time: 277, title: 'Google NotebookLM: For "grounded in truth" research based on your uploaded sources' },
      { time: 433, title: 'AI Image Generation (DALL-E in ChatGPT)' },
      { time: 532, title: 'Midjourney: How to learn prompting by studying others' },
      { time: 567, title: 'AI Copyright (An evolving legal space)' },
      { time: 649, title: 'AI Video Editing: Descript (Edit video like a text doc)' },
      { time: 732, title: 'Use Case: Repurposing webinar content for TikTok' },
      { time: 796, title: 'AI Video Generation: Runway & Pika.art' },
      { time: 843, title: '"Vibe Coding" Tools (No-Code)' },
      { time: 850, title: 'Lovable.dev: Build a front-end app/website from a prompt' },
      { time: 936, title: 'Agent.ai: Build your own AI agents (e.g., LinkedIn sales assistant)' },
      { time: 1035, title: 'N8N: Visual workflow builder for automation' },
      { time: 1059, title: 'AI Presentation Tools: Beautiful.ai' },
      { time: 1201, title: 'AI Visualization Tools: Napkin.ai (Context-aware visualizations)' },
      { time: 1283, title: 'Key Takeaway: "It is not cheating to use AI"' },
      { time: 1324, title: 'Q&A: AI Security (Paid vs. Free) & Turning off model training' },
      { time: 1375, title: 'Q&A: PII, data contracts, and "AI in the shadows"' },
      { time: 1405, title: 'Q&A: Agent.ai is model-agnostic' },
      { time: 1423, title: 'Q&A: The future of AI Agent "Swarms"' },
      { time: 1501, title: 'Q&A: Privacy risks of meeting recorders (Granola, Plaud.ai)' },
    ],
  },
  'ai-dmo-leadership': {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation. This comprehensive leadership guide covers scaling AI by department, creating AI governance frameworks, managing three critical risk areas (Data Security, Data Privacy, Content Integrity), developing organizational AI guidelines, handling vendor partnerships, and implementing both top-down and bottom-up adoption strategies.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Scale AI by Department: Move from ad-hoc individual use to organizational workflows by focusing on specific departments (like HR), identifying use cases for their core responsibilities (like performance reviews), and creating department-specific AI tools (like Custom GPTs).',
      'Governance is Non-Negotiable: Leaders must address "AI anxiety" by creating clear AI guidelines. This presentation focuses on three core risk areas: Data Security (systems), Data Privacy (people), and Content Integrity (IP).',
      'Use Paid Tools & Turn Off Training: The most critical step for Data Security is providing paid, enterprise-grade tools (like ChatGPT Team or Microsoft Copilot). These tools offer SOC 2 compliance and, most importantly, allow you to turn off model training, which prevents your proprietary data from being absorbed by the AI model.',
      'NEVER Put PII in an LLM: For Data Privacy, the simplest rule is to never input Personally Identifiable Information (PII) into a large language model. Doing so, especially for EU citizens, violates the EU AI Act and GDPR because the data can never be permanently deleted from the model.',
      '"Human in the Loop" is Non-Negotiable: AI is a tool, not a final authority. Organizations are responsible for all AI-generated output. This requires a "human in the loop" to fact-check, edit, and ensure all content aligns with brand standards and truthfulness, as AI models "have no relationship to truth."'
    ],
    topics: [
      'AI Governance',
      'AI Guidelines',
      'AI Risk Management',
      'Data Security',
      'Data Privacy',
      'Content Integrity',
      'Intellectual Property (IP)',
      'Personally Identifiable Information (PII)',
      'GDPR / EU AI Act',
      'Model Training (turning it off)',
      'SOC 2 Compliance',
      'Shadow AI / BYO AI',
      'AI Adoption',
      'AI Workflows',
      'Standard Operating Procedures (SOPs)',
      'AI Use Cases',
      'Destination Marketing Organization (DMO)',
      'AI for HR',
      'Custom GPTs',
      'ChatGPT Team',
      'AI Agents',
      'Red Teaming (AI)',
      'Vendor Management',
      'AI Mantras',
      'Human in the Loop'
    ],
    targetAudience: {
      primary: 'DMO (Destination Marketing Organization) leaders, executives, and managers',
      secondary: 'HR, IT, and Legal professionals, Innovation and AI officers, Tourism and hospitality industry leaders',
      tertiary: 'Anyone responsible for creating or implementing an organizational AI policy'
    },
    learningOutcomes: [
      'Develop a strategy for scaling AI use across their organization by department.',
      'Identify the three primary risk areas of AI governance: Data Security, Data Privacy, and Content Integrity.',
      'Understand the critical importance of using paid, secure AI tools (like ChatGPT Team) to turn off model training and protect company data.',
      'Explain why inputting PII into an LLM is a major legal and privacy violation (GDPR / EU AI Act).',
      'Create a framework for their own AI guidelines, covering vision, ethics, confidentiality, and vendor management.',
      'Recognize the risks of "Shadow AI" (BYO AI) and the counter-risks of banning AI entirely.'
    ],
    relatedResources: [
      { name: 'Pika (Pika.art)', description: 'Tool for creating animated images', url: 'https://pika.art' },
      { name: 'ChatGPT Team (OpenAI)', description: 'Paid/secure enterprise AI tool', url: 'https://openai.com/chatgpt/team' },
      { name: 'Claude Team (Anthropic)', description: 'Paid/secure enterprise AI tool', url: 'https://www.anthropic.com/claude' },
      { name: 'Gemini for Google Workspace', description: 'Google\'s enterprise AI tool', url: 'https://workspace.google.com/solutions/ai/' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s enterprise AI tool', url: 'https://copilot.microsoft.com' },
      { name: 'AI Opener for Destinations', description: 'Program by Group NAO and Miles Partnership', url: 'https://www.aiopenerfordestinations.com' },
      { name: 'Roxanne Steinhoff', description: 'AI governance framework creator', url: 'https://www.linkedin.com/search/results/all/?keywords=roxanne%20steinhoff' },
      { name: 'IAPP', description: 'International Association of Privacy Professionals (AIGP Certification)', url: 'https://iapp.org' },
      { name: 'Hard Fork Podcast', description: 'New York Times AI podcast', url: 'https://www.nytimes.com/column/hard-fork' },
      { name: 'Marketing AI Institute', description: 'Podcast and AI marketing resources', url: 'https://www.marketingaiinstitute.com' },
      { name: 'Ethan Mollick', description: 'Wharton Professor and AI thought leader', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'Connor Grennan', description: 'NYU AI leader and thought leader', url: 'https://www.linkedin.com/in/connorgrennan/' },
      { name: 'Allie K. Miller', description: 'AI courses and thought leader', url: 'https://www.linkedin.com/in/alliekmiller/' },
      { name: 'Descript', description: 'AI video editing tool', url: 'https://www.descript.com' },
      { name: 'Mindtrip', description: 'AI itinerary builder used by Brand USA', url: 'https://www.mindtrip.com' },
      { name: 'Brand USA AI Policy', description: 'Public AI guidelines document', url: 'https://thebrandusa.app.box.com/s/bbsg85jl4w1rbgolcyg2kwjzy7he9g64' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Welcome' },
      { time: 56, title: 'AI in the Tourism Industry: Three Focus Areas' },
      { time: 103, title: 'How to scale AI work at your DMO (by department/org chart)' },
      { time: 202, title: 'Create regular, department-specific AI meetings' },
      { time: 242, title: 'Collect SOPs (Standard Operating Procedures) to prepare for agentic AI' },
      { time: 270, title: 'Introduction to AI Governance & employee "AI Anxiety"' },
      { time: 300, title: 'The 3 Risk Areas: Data Security, Data Privacy, Content Integrity' },
      { time: 314, title: 'Risk 1: Data Security (Provide paid tools: ChatGPT Team, Copilot, etc.)' },
      { time: 365, title: 'Crucial Step: Turn off "training on your data"' },
      { time: 393, title: 'Risk 2: Data Privacy (Do NOT put PII into an LLM)' },
      { time: 473, title: 'Risk 3: Content Integrity (Protecting Intellectual Property)' },
      { time: 513, title: 'Use Case: Uploading research as a "source of truth"' },
      { time: 570, title: 'Contracts: Get addendums from vendors for AI use' },
      { time: 604, title: 'The problem of "BYO AI" (Shadow AI)' },
      { time: 619, title: 'Risks of BYO AI: Security, Privacy, Operational, Reputational' },
      { time: 711, title: 'Banning AI creates its own risks (use goes underground)' },
      { time: 723, title: 'How to create AI Guidelines (Roxanne Steinhoff framework)' },
      { time: 808, title: 'Brand USA\'s AI Guidelines: Vision & Transparency' },
      { time: 838, title: 'Brand USA\'s Guidelines: "Human in the loop" (Boston "autocorrect" example)' },
      { time: 880, title: 'AI cannot "fact check" itself' },
      { time: 902, title: 'Red Teaming: The need to constantly check your chatbots' },
      { time: 963, title: 'Governance Layer 2: External Partnerships (Vendors/Agencies)' },
      { time: 1021, title: 'Governance Layer 3: Tool Vetting (Procurement process)' },
      { time: 1074, title: 'AI Mantras (Start small, think big; top-down & bottom-up)' },
      { time: 1274, title: '"It is not cheating" to use AI at work' },
      { time: 1340, title: 'Q&A: How many tools? (Start with one paid tool, like ChatGPT)' },
      { time: 1378, title: 'Q&A: Favorite resources (Hard Fork, Marketing AI Institute, Ethan Mollick)' },
      { time: 1445, title: 'Q&A: Who owns AI policy? (It\'s a blend: COO, IT, Legal, HR)' },
      { time: 1512, title: 'Q&A: AI Certifications (IAPP, Allie K. Miller, Connor Grennan)' },
      { time: 1552, title: 'Q&A: AI for DMO websites (Mindtrip)' },
    ],
  },
  'custom-gpts': {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows. This comprehensive guide covers building Custom GPTs from scratch, troubleshooting hallucinations, practical use cases for DMOs (expense policies, press releases, meeting follow-up, coaching), and the critical differences between Custom GPTs and Projects.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'A Custom GPT is a reusable prompt that bundles specific instructions, "Knowledge" (like uploaded PDF files), and capabilities (like web browsing) to create a specialized AI assistant that can be used repeatedly.',
      'AI models are non-deterministic and can hallucinate even when given specific files. To get factual results, you must write very strict instructions (e.g., "never rely on outside knowledge") and upload your own "source of truth" documents for the AI to query.',
      'Custom GPTs are ideal for organizational quality control and consistency. They can be built by Subject Matter Experts (SMEs) to perform specific, repeatable tasks like drafting press releases in a company style or acting as a "coach" to give feedback on sales call transcripts.',
      'Paid AI accounts are essential for business use. Free accounts use your data to train future models, which is a major security risk. Paid accounts (like ChatGPT Team) allow you to turn off model training and access crucial features like Custom GPTs.',
      'The primary practical difference between a Custom GPT and a ChatGPT Project is sharing. Custom GPTs can be shared across an organization, while Projects are for personal organization and cannot be shared.'
    ],
    topics: [
      'Custom GPTs',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Knowledge Base (AI)',
      'AI Use Cases',
      'Data Privacy',
      'Model Training',
      'Source of Truth',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Sales Enablement',
      'AI Meeting Notetakers',
      'ChatGPT Projects',
      'GPT-5 / GPT-4o',
      'Edge Cases (AI)',
      'Simpleview',
      'Pika.art'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Travel and tourism industry teams, Marketing and communications managers, Sales and business development teams, Operations and HR professionals',
      tertiary: 'Professionals seeking practical, repeatable AI workflows'
    },
    learningOutcomes: [
      'Define what a Custom GPT is and identify its core components (Instructions, Knowledge, Capabilities).',
      'Build a new Custom GPT from scratch, including uploading knowledge files and writing instructions to control its behavior.',
      'Understand why AI models hallucinate (they are "non-deterministic") and apply troubleshooting techniques (like writing stricter prompts) to ensure factual accuracy.',
      'Identify multiple high-value business use cases for Custom GPTs, such as querying internal policies, drafting press releases, summarizing meeting transcripts, and coaching staff.',
      'Differentiate between a shareable Custom GPT (for team use) and a personal ChatGPT Project (for organizing chats).',
      'Recognize the critical security and privacy reasons for using paid AI accounts and turning off model training.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Otter.ai', description: 'Meeting notetaker and transcription tool', url: 'https://otter.ai' },
      { name: 'Fireflies.ai', description: 'Meeting notetaker and transcription tool', url: 'https://fireflies.ai' },
      { name: 'Simpleview', description: 'CRM platform mentioned for DMO use', url: 'https://www.simpleviewinc.com' },
      { name: 'ChatGPT Team', description: 'Business plan with Custom GPT sharing capabilities', url: 'https://openai.com/chatgpt/team' }
    ],
    chapters: [
      { time: 10, title: 'What is a Custom GPT?' },
      { time: 24, title: 'Use Case 1: Brand USA Travel & Expense Policy' },
      { time: 98, title: 'Key Feature: Conversational follow-up' },
      { time: 120, title: 'Why use Custom GPTs? (Save time, ensure consistency, control quality)' },
      { time: 160, title: 'How to edit a Custom GPT' },
      { time: 171, title: 'Backend Part 1: Instructions (The main prompt)' },
      { time: 191, title: 'Backend Part 2: Knowledge (Uploading files as a "source of truth")' },
      { time: 209, title: 'Critical Risk: AI Hallucinations (Non-deterministic)' },
      { time: 235, title: 'Example of failure: The "Chicago" per diem edge case' },
      { time: 265, title: 'The fix: Writing a stricter, more robust prompt' },
      { time: 310, title: 'Backend Part 3: Model Selection (GPT-5 vs. 4o)' },
      { time: 341, title: 'Backend Part 4: Capabilities (Web browsing, DALL-E, etc.)' },
      { time: 373, title: 'How to create a new Custom GPT from scratch' },
      { time: 389, title: 'The "GPT Store"' },
      { time: 431, title: 'Use Case 2: Press Release Drafter' },
      { time: 458, title: 'Pro-tip: Use ChatGPT to help write your instructions' },
      { time: 531, title: 'Key Insight: Subject Matter Experts (SMEs) must build and validate GPTs' },
      { time: 555, title: 'How to build: Sharing Options (Team, Public, etc.)' },
      { time: 585, title: 'Use Case 3: Meeting Notetakers & Sales Workflows' },
      { time: 611, title: 'Warning: Get consent before recording meetings' },
      { time: 655, title: 'Idea: "CRM" GPT (for Simpleview)' },
      { time: 688, title: 'Idea: "Coach" GPT (for junior staff)' },
      { time: 752, title: 'More ideas: Policy Summarizer, Content Repurposer, Crisis Simulator, Onboarding' },
      { time: 794, title: 'Q&A: Recording meetings at trade shows (Otter, Fireflies)' },
      { time: 844, title: 'Crucial Info: Paid accounts are required to turn off model training' },
      { time: 871, title: 'Custom GPT vs. ChatGPT Project (Sharing is the key difference)' },
    ],
  },
  'ai-convention-sales': {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI Enhances Sales Capacity, Not Replaces Jobs: AI tools act as "assistants" to automate repetitive tasks, freeing up sales teams to focus on relationship building and strategy',
      'Custom GPTs Enable Team-Wide Consistency & Quality: Create reusable prompts with specific instructions for consistent, high-quality output across your team',
      '"Vibe Coding" Rapidly Turns Ideas into Prototypes: Use plain English to generate functional applications, like Visit Orlando\'s "MapCon" tool',
      'AI Agents Automate Complex Research: Use AI agents for sophisticated lead and competitive research, saving days of manual work',
      'Workflow Mapping is Key to AI Integration: Identify specific pain points in your existing workflow where AI can add immediate value'
    ],
    topics: [
      'AI for Sales',
      'Convention Sales',
      'Business Events',
      'Destination Marketing Organizations (DMOs)',
      'Custom GPTs',
      'AI Workflow Automation',
      'Prompt Engineering',
      'Vibe Coding',
      'Rapid Prototyping',
      'Low-Code/No-Code',
      'AI Agents',
      'Lead Research',
      'Competitive Analysis',
      'CRM Integration',
      'Meeting Follow-up',
      'Sales Operations',
      'AI Implementation Strategy',
      'Agent.ai',
      'Replit',
      'MapCon Tool'
    ],
    targetAudience: {
      primary: 'Sales and marketing professionals at Destination Marketing Organizations (DMOs), Convention and Visitors Bureaus (CVBs), and other convention sales teams',
      secondary: 'Sales operations managers, marketing technologists, and business leaders in the tourism and hospitality industry looking for practical AI use cases',
      tertiary: 'Anyone interested in building simple, practical AI tools (Custom GPTs, Vibe Coding) for team-specific workflows'
    },
    learningOutcomes: [
      'Identify at least three key areas in a convention sales workflow where AI can be integrated (e.g., CRM administration, reporting, meeting follow-up)',
      'Define what a Custom GPT is and list its main benefits for a team (saves time, ensures consistency, controls quality)',
      'Describe the basic steps to create a Custom GPT, including writing instructions (the prompt) and uploading knowledge files',
      'Explain the concept of "Vibe Coding" and how it enables non-developers to build functional application prototypes',
      'Recognize how AI agents can be used to automate complex lead generation and competitive analysis tasks'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'Platform for creating and using Custom GPTs', url: 'https://chat.openai.com' },
      { name: 'Agent.ai', description: 'Platform for building AI agents for lead research', url: 'https://agent.ai' },
      { name: 'Replit', description: 'Vibe Coding platform for building applications', url: 'https://replit.com' }
    ],
    chapters: [
      { time: 13, title: 'The Role of AI in US Promotion of Business Events' },
      { time: 72, title: 'What is a Custom GPT?' },
      { time: 104, title: 'Example: Custom GPT for Travel & Expense Policy' },
      { time: 161, title: 'Why Use Custom GPTs? (Saves Time, Ensures Consistency, Controls Quality)' },
      { time: 218, title: 'How to Create a New Custom GPT (Builder Interface)' },
      { time: 313, title: 'Using ChatGPT to Write the "Instructions" (Prompt) for Your Custom GPT' },
      { time: 395, title: 'Adding "Knowledge" (Files) to a Custom GPT' },
      { time: 469, title: 'Previewing and Testing Your Custom GPT' },
      { time: 521, title: 'Sharing Options for Custom GPTs (Private, Link, Team)' },
      { time: 598, title: 'Example Workflow: Custom GPTs for Meeting Follow-up' },
      { time: 941, title: 'Using AI for Competitive Analysis ("Deep Research")' },
      { time: 1089, title: 'Using AI Agents for Lead Research' },
      { time: 1106, title: 'Demo: Using Agent.ai to Research a LinkedIn Profile' },
      { time: 1477, title: 'Planner/Delegate Experience Enhancement' },
      { time: 1494, title: 'Introduction to Vibe Coding' },
      { time: 1537, title: 'What is Vibe Coding? (Concept & Workflow)' },
      { time: 1658, title: 'The Importance of the Prompt in Vibe Coding' },
      { time: 1695, title: 'Vibe Coding in Action: The Manual "MapCon" Problem' },
      { time: 1808, title: 'Vibe Coding Demo: Building the "MapCon" Tool Prototype' },
      { time: 2368, title: 'Vibe Coding Backend Tool (Replit Demo)' },
      { time: 2478, title: 'AI is an Opportunity to Expand Capacity, Not Replace Jobs' },
      { time: 2635, title: 'Incorporating AI into Your Sales Workflow (Identifying Use Cases)' },
    ],
  },
  'crit-framework': {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands. It then provides two in-depth demonstrations: first, using the CRIT method to plan a detailed one-hour workshop, and second, brainstorming a low-budget marketing activation by uploading a PDF for the AI to use as a source of truth.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'The CRIT framework (Context, Role, Interview, Task) is a structured method for providing comprehensive details to an AI, which leads to significantly more useful and interesting responses',
      'Context is key: The quality of an AI\'s output is directly proportional to the quality and quantity of the background information, constraints, and "source of truth" (like a PDF) you provide',
      'Use voice-to-text to "talk" to the AI: Dictation tools allow you to provide much richer, more natural, and detailed context than you would normally type',
      'Instructing the AI to "interview" you by asking clarifying questions is a powerful technique to ensure it gathers all the necessary details before generating a solution',
      'Generative AI is a powerful brainstorming and workflow partner that can be used for complex, practical tasks like planning an entire workshop or developing a multi-part marketing activation'
    ],
    topics: [
      'AI Prompting',
      'Prompt Engineering',
      'CRIT Framework',
      'Generative AI',
      'AI for Business',
      'AI for Marketing',
      'Contextual AI',
      'AI Brainstorming',
      'AI Productivity',
      'Workshop Planning',
      'Marketing Activation',
      'Voice-to-Text',
      'AI Dictation',
      'ChatGPT',
      'Claude',
      'Monologue',
      'Wispr Flow'
    ],
    targetAudience: {
      primary: 'Professionals, marketers, and corporate trainers who want to move beyond basic AI queries and learn a structured system for getting practical, high-quality, and creative results from generative AI tools for complex business tasks',
      secondary: 'Business professionals seeking to improve their AI prompting skills',
      tertiary: 'Anyone interested in advanced AI communication techniques'
    },
    learningOutcomes: [
      'Understand and apply the four parts of the CRIT framework (Context, Role, Interview, Task) to their own prompts',
      'Articulate why providing deep context and a "source of truth" (like a PDF) is essential for high-quality AI output',
      'Use voice dictation as a tool to create more detailed and effective AI prompts quickly',
      'Structure a prompt that encourages the AI to ask clarifying questions to refine its understanding',
      'Brainstorm and plan complex, multi-step projects (like a workshop or marketing campaign) in collaboration with an AI'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'AI model used for demonstrations', url: 'https://chat.openai.com' },
      { name: 'Claude', description: 'AI model mentioned in examples', url: 'https://claude.ai' },
      { name: 'Monologue', description: 'Local voice-to-text transcription software', url: 'https://monologue.app' },
      { name: 'Wispr Flow', description: 'Voice-to-text dictation tool', url: 'https://www.wispr.ai' },
      { name: 'Zapier', description: 'Integration tool mentioned in workflow example', url: 'https://zapier.com' },
      { name: 'MindTrip', description: 'Itinerary planning tool mentioned', url: 'https://www.mindtrip.com' }
    ],
    chapters: [
      { time: 3, title: 'Introduction to the CRIT (Context, Role, Interview, Task) Framework' },
      { time: 26, title: 'The benefit of using voice-to-text for detailed prompting' },
      { time: 62, title: 'The core principle: "We should talk to AI" to provide rich context' },
      { time: 119, title: 'Example 1 - Context: Describing the setup for a one-hour workshop' },
      { time: 222, title: 'Example 1 - Role: Assigning the AI the expert role of "Chief AI Officer"' },
      { time: 237, title: 'Example 1 - Interview: Prompting the AI to ask clarifying questions' },
      { time: 274, title: 'Example 1 - Task: Defining the specific goal (create a workshop outline)' },
      { time: 338, title: 'The AI begins its "interview" process, asking the first question' },
      { time: 490, title: 'Example 2 - Context: Uploading a PDF as a "source of truth" for brainstorming' },
      { time: 556, title: 'Example 2 - Role: Assigning the AI the role of "Marketing Director"' },
      { time: 615, title: 'The AI generates ideas grounded in the provided PDF' },
      { time: 779, title: 'Final summary: "Brainstorming with AI: Context is Key"' },
    ],
  },
  'clueless-packing-app': {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    isShortForm: true, // Flag for vertical player layout
    chapters: [], // No chapters for short-form content
  },
  'model-context-protocol': {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: 'This presentation introduces the Model Context Protocol (MCP) as a technical breakthrough designed to solve AI\'s trustworthiness problem in travel planning by acting as a "source of truth." Janette explains how this technology allows personal AIs to reliably connect with real-time data, demonstrates practical applications for tourism, and outlines the strategic shift for destination marketing organizations.',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    transcript: `(00:00) I want to share the context shift that we are seeing with how people are searching for travel. Booking.com released a report they called the Global AI Sentiment Report. They released it over the summer. They conducted it in April and May of this year, and they did online surveys of over 37,000 people across the globe. In these surveys, they found that 91% of the respondents are excited about AI.
(00:31) They saw that 62% of respondents of traveling respondents have used AI to plan or book a trip. Only 6% of respondents fully trust AI solutions, and that's because we know AI hallucinates, right? We can't fully trust it to plan or book travel for us because that's just relying on whatever it pulls up in its search results or whatever information is in the underlying model.
(00:58) What happens when travel planners, whether we're looking at B2B or B2C travelers, want to use their own ChatGPT accounts to plan a vacation or a business trip or a convention or meeting? Our personal AI needs access to a source of truth if we're going to do that. We know that it cannot rely on that underlying training data. That data, it's only getting updated a couple of times a year. It's not time-based. It's not going to be accurate for something like actually planning a trip.
(01:30) So what is the solution for that? It's actually a breakthrough that Anthropic, which is the company that created the chatbot Claude, released last September. It's something I have been watching since March of this year, called Model Context Protocol. This is a universal protocol. It's not limited to Claude, it works with Gemini, ChatGPT. It's agnostic to which underlying large language model is being used. But this allows you to plug your personal AI into context without writing code for an API connection.
(02:08) What do we mean when we talk about context? That is either resources or tools. So resources, that's the stuff that our AI can look at. It's structured data. It could be the content that is on your website. It could be a venue database or an event calendar. And this could be tools. It's actions that the AI can invoke on an external system.
(02:34) This gives you a more visual sense of what this looks like. Here on the left, before MCP servers, every time you wanted to connect something to your ChatGPT account, like here we have Slack, we have your Google Drive, we have GitHub, you would need to set up a unique API connection for each one of those interactions.
(02:58) The way that Model Context Protocol works, it's like a USB-C connector. So it doesn't matter what the APIs are, you write an API that goes to MCP, and then that is the universal tool that makes your language model, whether it's ChatGPT or Claude, able to understand the input. Previously you had to do one by one, and it's now universal.
(03:27) You can think of MCP servers or these individual hubs of information as an app store. So you can add those servers into your personal instance of ChatGPT, or Gemini, or Claude, and then you interact with them the way that if you have an app on your phone, you can interact with it using Siri. It's that USB-C that allows you to communicate with the app.
(03:55) What makes an MCP server different than an API? If we look at APIs, they've existed for a long time. It's a way to connect different computer systems. Whereas MCP, Model Context Protocol, you can think of it as an API that is native to AI. An API exposes functionality through a fixed set of predefined endpoints.
(04:24) I used to work for companies that sold Broadway theater tickets. If you were a company that wanted to sell those Broadway tickets, you would look at our APIs and say, okay, this is where we pull the number of tickets. This is where we pull the performance date, the performance time, the part of house where we want to buy those tickets. And for something like a theater ticket, setting up that API connection is complicated because you're not just looking at open inventory, every single seat is unique. And so creating the APIs can be very complex and you have to bring in developers and they have to write a lot of code.
(05:03) With MCP, instead of writing code to each of those endpoints, it's exposing those capabilities to ChatGPT as a self-describing tool. It doesn't need programming. It is able to describe to ChatGPT what it does and how to use it. And so instead of each endpoint being a very rigid operation, each MCP tool includes a semantic description, meaning something that the language model can understand, that spells out what it is, how it works, the meaning of each parameter in that tool, what the expected outputs are, how it works, and how it doesn't work. What are the constraints and limitations on this?
(05:51) With an API, when you are hiring a developer to connect to API endpoints, they need to have documentation to do that. They need to be able to look at something in order to write the code correctly. But because MPC is self-describing, the interface itself is the documentation. You don't need all of that extra work. And then finally, if you've ever worked with APIs, you know every time you make a change to one, you bring the developer back in because that breaks the connection when you make a change to the API. And that's not true with MPC because any changes to the Model Context Protocol server are automatically shared through the interface. There's no need to update code.
(06:38) You could see where that becomes a powerful tool. Even though this has been around for over a year now, it's still fairly new in terms of people understanding what it is and how it works and what does it mean to us in the tourism industry. But OpenAI just made this a little easier for us to understand because they released apps for ChatGPT.
(07:03) There's no sound on this video. This is a video that OpenAI released when they announced chatting with apps. So here we see they have an integration with Spotify. And if you connect to their... they call it an app, but it's really a Model Context Protocol server. And if you connect using that server, Spotify to ChatGPT, you can control it here. You can connect Zillow to ChatGPT, and that way you never leave the tool that you are already researching in. In order to find something, like here, Canva. You're already working in ChatGPT, you already have this outline in ChatGPT, so it makes sense that you stay in ChatGPT in order to find your home on Zillow, to create the Canva deck, or here, relevant to us, Expedia and Booking.com both released apps on ChatGPT.
(08:05) It's a little tricky to find these apps. These are screenshots of what this looks like when you are using the app inside of ChatGPT for both Expedia and for Booking.com. It's not available if you have a business account. Right now, this is available only if you are logged in on the free plan or if you have a personal paid account on ChatGPT. My understanding is that these don't really work great yet, but it is early days. And at some point, these will work great, right? Six months from now, it's going to be very seamless, I think, to use these tools to make a booking through ChatGPT without ever leaving ChatGPT.
(08:52) At the same time that they released these apps, they shared that a payment platform is going to be integrated into ChatGPT by the end of the year. And anybody, including all of us on this call, can create apps for ChatGPT and submit them to be included in their upcoming app store. There are developer protocols for essentially how to make an MCP server, and then how to connect that to the ChatGPT app interface in order to have that released in their app store. And then once they release their payment protocol, you can actually accept bookings from people inside of ChatGPT.
(09:37) This is going to fundamentally change the way that we interact with these systems, which is why travel needs to start thinking about this.
(09:48) What are applications for tourism? One way is if we had a server of curb cuts. So those are the divots in the curb that allow you to push a stroller or roll a wheelchair easily across a curb without going over that little hump. In New York City, we have a lot of curbs. It would be useful to have a database that was updated in real time of every curb cut in the city. If I wanted to use that database inside of my personal AI account, I could say, "I am at this hotel and I am eating dinner three blocks away at this restaurant. Can you plan a route for me where every single street I need to cross, there's absolutely going to be a curb cut on that sidewalk?" And instead of guessing, which is what ChatGPT would do right now, it would make a call externally to this server that contains information about curb cuts so that it could return to the user. Because it's already going to know the exact makeup of your stroller or your wheelchair, it's going to know the exact dimensions that you need personally. And it can say, "Okay, given what I already know about you, because you have all of this information about yourself inside of ChatGPT, let me guide you to the best path."
(11:12) Let's say you are a business event planner. Right now, if you wanted to plan a business event inside of ChatGPT, that's going to be risky because you can only get so far with factual information. If you are asking for dimensions of ballroom space or live information like hotel room availability, at a certain point you were going to hit a roadblock with ChatGPT. And that's when you were going to need to log into Cvent, you're going to need to go to a destination's website and fill out an RFP form.
(11:47) But if you had one server that was accessible to the language model of your choice that had all of the data about every hotel room and every meeting space and venue, and all of the suppliers that have already been vetted in a destination, and you would be able to know, okay, because this came from a trusted source, assuming it was your destination's website, that provides a new way for planners to not log into a specialty planning site, but to stay inside the tool that they already like to use, their own personal AI, and to have that attached to a source of truth that would get them a little further along the journey of knowing whether they should include your destination in the RFP they're assembling or not.
(12:38) To go back to a Broadway example, my mom and sister came to visit me right after Labor Day this year, and I had a very specific idea of how to plan the tickets for our trip. I didn't want to purchase the most expensive seats for a particular show. I had a list of three shows that I was interested in. There were three possible performance times that were available to us based on our other plans when they were visiting. And I wanted to see that I was getting the best value for the money. I knew I wanted orchestra seats. They didn't have to be center orchestra. I didn't want it to be in the balcony. I didn't want it to be past the 18th row of the orchestra.
(13:21) Right now, if I want to compare all of those different performances and all of those different seat location qualities and price points, I would have to do three searches times three different shows, then hope that the availability didn't change too much at the point that I go back to the very first out of nine searches.
(13:42) So, Model Context Protocol. If there were a Broadway database that the theater owners created, you would be able to ask ChatGPT, "Go to this, based on this brand name of this Broadway database that I trust, tell me out of these three shows, these three performance times, who has the best quality seat based on what I consider to be good, at what I consider to be a good ticket price." And then in the platform where I'm already doing my planning, I could ostensibly get that search result without doing nine separate ticket requests.
(14:20) If we want to look at a tool-based use of MCP, currency conversions. You don't want to use ChatGPT for a currency conversion because whatever information is in the underlying model is going to be out of date. Right now, you would want to either do a search inside of ChatGPT or go to Google and go to a live website that is tied into current real-time currency values before you determine what that conversion rate is. But if you told it to log into a live currency converter, all of a sudden you are bringing that context, that tool, into your own AI account so that you know the answer is going to be accurate.
(15:05) What are the strategic implications of this? MCP has the possibility of redefining the role of a destination marketing organization. We are already seeing search traffic is no longer sending people to websites, the same patterns that they were three years ago. Our information, our content on our websites needs to be decoupled from the house that is our website. Because the AIs that our travelers are using, it's going to visit our data, not just our website.
(15:43) That gives DMOs an opportunity to structure and then publish our content as MCP servers. That gives something that AI tools can trust and possibly surface first in their search results. That also gives us an opportunity to create an app for ChatGPT that will allow us to be a first mover in that area. If you are working in sales for a hotel or for an attraction, MCP could be the way that people are booking your attraction or your hotel in the future.
(16:19) And if you are asking ChatGPT, "which observation deck should I visit in New York City?" Perhaps the observation deck that will win will be the one that has MCP enabled and allows you to actually process the transaction inside of that chat query. We already know that people are using ChatGPT more and more when it comes to travel planning. For the DMO side, this gives us the opportunity to become stewards of data and stewards of stories about our destinations.
(16:54) I don't know that there's a ton of value in us creating MCP servers that just contain addresses and phone numbers and website addresses of venues in our destination, because that kind of information is commoditized. Google already has all of that information, right? Every other source on earth already has that information. It would be very hard for us to stay ahead of Google when it comes to accurate venue information.
(17:23) What does become interesting is content, and how can we take content and the stories that we write and make those modular and accessible through these servers so that travel planners and our B2B partners are able to access that information.
(17:42) I see two possible ways forward here. One being this open ecosystem that DMOs could lead, using our public trust or our nonprofit status that we can be a verified source for tourism information, for tourism stories. That gives us opportunities... and I'm already talking to tour operators in Europe about the opportunity of taking our stories, our content about the United States and being able to surface that content through their AI tools that they use to build packages for travelers in Europe. Thinking about these ecosystems and how can we create a schema or a way of organizing this data that is free for all US destinations to adopt, I think could be an important path forward for the industry.
(18:39) If we don't do anything, there's a possibility of a closed ecosystem developing, whether it's existing platforms or it's VC startups who take it upon themselves to aggregate data or to aggregate storytelling. And then they charge DMOs to have visibility in those platforms. That's what happened to DMOs with the advent of web search, right? Then all of a sudden we are paying for presence in these systems that other people are running instead of creating our own.
(19:14) Given all of this and the fact that it's still all new, and quite honestly, I am still figuring it out myself, what are our next steps? If this is something that interests you, talk to your agency partners. We work with Miles Partnership and we are building something with them called a vector database. It's taking your existing content and then vectorizing it, which is turning all of it into numbers to see where in the semantic space all of this information sits, which is getting a little bit technical. But that's something that enables natural language search on your website and it can also make your content digestible to B2B partners, for example.
(20:00) We all need to think about the disaggregation of content from websites and how we retain value if people aren't coming to our websites in the same numbers in order to read our content. If you are interested in this area, if you are doing work in this area, I invite you to reach out to me. Please keep learning about this. Morten Rand-Hendriksen, I watched all of his tutorials on LinkedIn and it's a practical introduction to the technology behind Context Protocol, and how can we think about that from our own business perspectives.
(20:39) I'm talking about this because I don't want us just to hypothesize about the future. We are here to build it, and I want to build it with our great partners at Brand USA.
(20:50) If you're interested in MCP and you want to access these tools yourself, the easiest way would be through the apps inside of ChatGPT, or if you use a connector inside of ChatGPT or the platform of your choice, all of those connectors that connect to your Box account or to your Outlook or to HubSpot, those are all MCP connections. That's how those connectors work.
(21:16) But if you have a bit of tech savvy and you have a subscription to Claude, which is a chatbot that I like very much, Claude allows you to set up unique MCP servers that aren't already part of their ecosystem. You'll need to download the desktop app. This isn't available through the web interface. You'll go to the developer settings.
(21:40) I did all of this and I was a theater major. I don't have a really deep technical background. I was still able to figure this out. Use ChatGPT or Claude to say, "Okay, how do I open terminal on my machine? And then how do I launch a command line interface and set up this MCP server and the servers itself?" Each of these little blocks of code is access to an MCP server. Once you're in there and playing with it, it really is just that simple. You're saving this as a file on your computer, and then you can go into these developer settings and it will show you all of the MCP servers that you have on your machine.
(22:25) Then when you are having a chat with Claude, you'll see that it notifies you every time that it is going to make an external call to one of these MCP servers. Here you can see in the background... and this is a failed test, so don't get too excited. I'm trying to show my failures as well as my successes here. I was talking to Claude about a speech I was doing for the Missouri Tourism Conference last month. "I want to check flights from LaGuardia to Kansas City in October for this engagement." I purposely didn't tell it my dates because I had the dates in Claude from an earlier conversation, and it also has access to the internet. In theory, it should be able to look to see what the dates are of this conference to advise me on flights.
(23:11) And like I said, it didn't work. What didn't work about it is just that it's a bad MCP server. Like it's something that this company had created and they had stopped updating or they never finalized it, so it wasn't helpful for the project that I was trying to do. But you can see what the thought process was. It's trying airport codes, it's looking to see what airports are available in the database. So you can see how with a working server, like with the Expedia server, you can see how that's going to be pretty magical once that's working.
(23:49) Then for another example, we're able to connect Claude to a program called Wrike, which is our project management tool. They have a separate standalone MCP server connected to Claude. And I tested it out by saying, "Here's a bunch of emails about speaking engagements that I have coming up. Can you create tasks and assignments for me in Wrike using this information?"
(24:16) You can see the process that it went through. It got my contact ID, it got my personal space inside of Wrike. It searched the folders in order to see that there were event-based projects so that it could create new projects that looked like the projects that were already in the system. And then it created all of these tasks. It didn't do it perfectly. It's not the way that we would have set it up if it were a human doing it. But in terms of me having a quick way to be able to check off deadlines, that's pretty useful.
(24:51) And then I'm going to play a video here. This is a recent check that I did. So this was just last week. I went to Claude and said, "Can you tell me what my upcoming deadlines are?" And here it's walking through what all of my deadlines are. So, I don't have a million projects in Wrike, so it was about mostly about this webinar and the deadlines for this webinar, as well as an old task, and then a newsletter that I needed to draft for the company. And here, it is able to see work that I had done previously and use that, and it was work that was done in another chat. And it is writing here a draft of what it thinks my entry should be to my newsletter.
(25:38) And I am sharing this because I really do see this being the future of work. These programs, ChatGPT, Claude, Gemini, they want to be the operating system for the office. It's easy to see that six months from now, I might be able to log into Claude on Monday morning and it will greet me and say, "Hello Janette. Here's all of your tasks for the week. You have a webinar due. Here is the first draft of the topic that you said that was interesting to you. So please review the draft and let's work on that together. Separately, I have your entry for the newsletter that's due, and let's talk about the board meeting that's on Thursday."
(26:23) Because we do more and more of our work inside of these systems, the more we use them, the more useful they become. The more they are able, when they become more agentic, to fill in the gaps of your knowledge. It's all happening with baby steps, but this is how AI is progressing over the next year. And that's why I'm very bullish on Model Context Protocol and the role that it's going to play in making AI an important part of our workday.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Travelers are increasingly using AI for planning (62% have tried it), but low trust is a major barrier, with only 6% "fully trusting" AI solutions due to hallucinations and outdated data',
      'Model Context Protocol (MCP) is a new "AI-native" technology that acts as a "source of truth," allowing personal AIs (like ChatGPT) to plug into verified, real-time data from trusted sources',
      'MCP functions like a universal connector or "app store" for AI, enabling it to use external tools and databases (e.g., Booking.com, venue finders, accessibility data) without complex, custom-coded APIs',
      'This technology represents a fundamental strategic shift for Destination Marketing Organizations (DMOs), moving their role from primarily managing websites to becoming "stewards of data" that publish their content as trusted MCP servers',
      'DMOs have a critical, time-sensitive opportunity to lead an "Open Ecosystem" of verified tourism data, rather than ceding control to "Closed Ecosystems" run by third-party platforms that will charge for access'
    ],
    topics: [
      'Model Context Protocol (MCP)',
      'AI in Travel & Tourism',
      'Generative AI',
      'Large Language Models (LLMs)',
      'AI Trust & Hallucinations',
      'Destination Marketing Organization (DMO)',
      'Data Stewardship',
      'APIs vs. MCPs',
      'Apps in ChatGPT',
      'Claude',
      'Anthropic',
      'Open Ecosystem (Data)',
      'Closed Ecosystem (Data)',
      'AI Agents',
      'Travel Planning',
      'B2B Marketing'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) executives and strategists',
      secondary: 'Travel and tourism industry leaders, marketing and technology professionals in the hospitality sector',
      tertiary: 'B2B event and meeting planners, developers interested in AI and travel technology'
    },
    learningOutcomes: [
      'Define Model Context Protocol (MCP) and explain its function as a "source of truth" for AI',
      'Understand the key differences between a traditional API and an "AI-native" MCP',
      'Identify the limitations of using standard LLMs for travel planning and how MCPs solve for trust and accuracy',
      'Analyze the strategic implications of MCPs for the tourism industry, particularly for DMOs',
      'Recognize real-world applications of MCP, such as ChatGPT "Apps" (Expedia, Booking.com) and B2B data tools'
    ],
    relatedResources: [
      { name: 'Booking.com Travel Predictions', description: 'Global AI Sentiment Report and travel trend insights', url: 'https://www.booking.com' },
      { name: 'Anthropic', description: 'Creators of Claude and Model Context Protocol', url: 'https://www.anthropic.com' },
      { name: 'Claude', description: 'AI chatbot with MCP server capabilities', url: 'https://claude.ai' },
      { name: 'Wrike', description: 'Project management software used in demo', url: 'https://www.wrike.com' },
      { name: 'Morten Rand-Hendriksen', description: 'LinkedIn tutorials on MCP technology', url: 'https://www.linkedin.com/learning/instructors/morten-rand-hendriksen' }
    ],
    chapters: [
      { time: 8, title: 'The central problem: 91% excited by AI, only 6% trust it' },
      { time: 39, title: 'The need for a "source of truth" beyond the base LLM' },
      { time: 103, title: 'The solution: Model Context Protocol (MCP) is introduced' },
      { time: 128, title: 'Definition of "Context": Resources (data) and Tools (actions)' },
      { time: 154, title: 'Diagram: "Before MCP" vs "After MCP" (unified protocol)' },
      { time: 180, title: 'Analogy: MCP as a "USB-C connector" for AI' },
      { time: 235, title: 'Technical comparison: APIs vs. MCPs (AI-Native and self-describing)' },
      { time: 398, title: '"Apps in ChatGPT" - First mainstream example of MCPs' },
      { time: 478, title: 'Tourism-specific Apps: Expedia and Booking.com' },
      { time: 588, title: 'Application Example: Accessibility (wheelchair-accessible routes)' },
      { time: 672, title: 'Application Example: B2B (trusted database of meeting venues)' },
      { time: 758, title: 'Application Example: Consumer (best-value Broadway tickets)' },
      { time: 905, title: 'Strategic Implications: How MCP redefines the DMO\'s role' },
      { time: 1004, title: 'The new role for DMOs: "Stewards of data and stewards of stories"' },
      { time: 1062, title: 'Two futures: "Open Ecosystem (Led by DMOs)" vs "Closed Ecosystem (Led by Platforms)"' },
      { time: 1154, title: 'Actionable next steps for DMOs and partners' },
      { time: 1250, title: 'How to access/create MCP servers (technical demo with Claude & Wrike)' },
    ],
  },
}

export default function WebinarPage({ params }: { params: { id: string } }) {
  const webinar = webinarData[params.id as keyof typeof webinarData]
  const [transcriptExpanded, setTranscriptExpanded] = useState(false)

  if (!webinar) {
    return (
      <AccessCheck>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Webinar not found</p>
        </div>
      </AccessCheck>
    )
  }

  // Generate enhanced JSON-LD schema for AI discoverability
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: webinar.title,
    description: webinar.description,
    duration: webinar.duration,
    thumbnailUrl: `https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`,
    contentUrl: `https://stream.mux.com/${webinar.muxPlaybackId}.m3u8`,
    uploadDate: '2024-01-01',
    creator: {
      '@type': 'Person',
      name: webinar.instructor,
      jobTitle: webinar.instructorTitle,
    },
    educationalLevel: (webinar as any).level || 'Professional',
    keywords: (webinar as any).topics?.join(', ') || '',
    about: (webinar as any).topics?.map((topic: string) => ({
      '@type': 'Thing',
      name: topic
    })) || [],
    ...(webinar as any).keyTakeaways && {
      teaches: (webinar as any).keyTakeaways
    },
    ...(webinar as any).learningOutcomes && {
      educationalUse: (webinar as any).learningOutcomes
    },
    ...(webinar as any).targetAudience && {
      audience: {
        '@type': 'Audience',
        audienceType: (webinar as any).targetAudience.primary
      }
    },
    ...(webinar as any).transcript && {
      transcript: {
        '@type': 'WebPageElement',
        text: (webinar as any).transcript
      }
    },
    hasPart: webinar.chapters.map((chapter: any) => ({
      '@type': 'Clip',
      name: chapter.title,
      startOffset: chapter.time
    }))
  }

  return (
    <>
      <AccessCheck>
        {/* JSON-LD Structured Data for AI Discoverability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />

        {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <Image
                src="/brandusa-logo.png"
                alt="Brand USA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Header actions can go here */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(webinar as any).isShortForm ? (
          // TikTok-style vertical layout for short-form videos
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              {/* Vertical Video Player */}
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>

              {/* Video Info Below Player */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-brand-navy mb-2">
                  {webinar.title}
                </h1>
                <p className="text-gray-600 mb-4">{webinar.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {webinar.duration}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                      {webinar.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{webinar.instructor}</div>
                      <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources - only show if resources exist */}
              {(webinar as any).resources && (webinar as any).resources.length > 0 && (
                <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
                  <div className="space-y-3">
                    {(webinar as any).resources.map((resource: any, index: number) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center">
                          <Download className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-gray-700 font-medium">
                            {resource.name}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Standard horizontal layout for webinars
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>

              {/* Transcript - only show if transcript exists */}
              {(webinar as any).transcript && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <button
                    onClick={() => setTranscriptExpanded(!transcriptExpanded)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
                  >
                    <h2 className="text-lg font-semibold text-brand-navy">Transcript</h2>
                    {transcriptExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {transcriptExpanded && (
                    <div className="px-6 pb-6 pt-2">
                      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {(webinar as any).transcript}
                      </div>
                    </div>
                  )}
                </div>
              )}

            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-brand-navy mb-2">
                {webinar.title}
              </h1>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {webinar.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {webinar.chapters.length} chapters
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    {webinar.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{webinar.instructor}</div>
                    <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Chapters</h2>
              <div className="space-y-2">
                {webinar.chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const player = document.querySelector('video') as any
                      if (player) {
                        player.currentTime = chapter.time
                        player.play()
                      }
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition text-left"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-12">
                        {Math.floor(chapter.time / 60)}:{(chapter.time % 60).toString().padStart(2, '0')}
                      </span>
                      <span className="ml-3 text-gray-900">{chapter.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Takeaways - only show if exists */}
            {(webinar as any).keyTakeaways && (webinar as any).keyTakeaways.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  {(webinar as any).keyTakeaways.map((takeaway: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-sky/10 text-brand-sky flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learning Outcomes - only show if exists */}
            {(webinar as any).learningOutcomes && (webinar as any).learningOutcomes.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">What You'll Learn</h2>
                <p className="text-sm text-gray-600 mb-4">After watching this video, you will be able to:</p>
                <ul className="space-y-2">
                  {(webinar as any).learningOutcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources - only show if resources exist */}
            {(webinar as any).resources && (webinar as any).resources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
                <div className="space-y-3">
                  {(webinar as any).resources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 font-medium">
                          {resource.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Related Resources/Tools - only show if exists */}
            {(webinar as any).relatedResources && (webinar as any).relatedResources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Tools Mentioned</h2>
                <div className="space-y-3">
                  {(webinar as any).relatedResources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-brand-navy mb-1">{resource.name}</div>
                      <div className="text-xs text-gray-600">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
      </AccessCheck>
    </>
  )
}