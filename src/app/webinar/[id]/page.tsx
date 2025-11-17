import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, Clock, BookOpen } from 'lucide-react'
import HLSPlayer from './hls-player'
import AccessCheck from '@/components/AccessCheck'
import TranscriptToggle from './TranscriptToggle'

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
    transcript: `My name is Janette Roush. I am the SVP of Innovation and Chief AI Officer for brand USA. If you're not familiar with us, we are the destination marketing organization for the United States. Uh, and we focus on driving international inbound, uh, uh, visitation to the US. So first of all, I want to assuage any fears that you have that this might be dry or not useful.

I'm including, uh, the image that you see of the Play-Doh version of Jeanette getting squished because I. Have seen a lot of AI presentations, and I know a lot of them are just a list of all the little tricks and tips that you can do, but you don't actually see anything useful that you can then take back to your office and actually use for work.

So while I think the fun stuff is fun, and if you wanna make one of these on your own, it is free@pika.art P-I-K-A-R-T. Uh. But for the rest of the presentation, going to be more on practical use cases. So we're talking very briefly with an overview of what are large language models like chat GPT and others.

We're going to walk through the. The basics of putting together a prompt. I'm then going to tell you how to cheat using ai. That's where I'm going to walk through a couple of case studies so you can actually see what this looks like in action. Uh, and then when we end, we're going to wrap up with some tips for how you can continue to incorporate AI work into, uh, the stuff you do every day.

So to get get us started, what is chat GPT? It is, one version of a large language model and chat. GPT is the interface that allows you to communicate with that large language model. So the large language model itself, uh, might be called GPT-4 oh, or any number of other names. I'll go through, uh, a little bit later in the presentation, but.

None of that is what you really need to focus on. If you are new to working with ai, you just need to remember that. Similar to how Alexa's Amazon device or Amazon's Alexa device is a conduit that allows you to communicate with a number of small ais in the background. That's what we're doing with chat GPT.

There's other ways that you can communicate with a large language model. Like if you're a developer, you might use APIs to do that, but we are only worried about that text interface right now. And what's happening in the scene behind the scenes is that this is just a giant algorithm, right? Open ai and these other companies, they went out to the internet, they stole every single word of the human language that has ever been written.

And then they used math to predict what word comes next in the sentence and some sentences are pretty easy. Like Mary had a little blank. We can guess that lamb might be that last word in the sentence, but for other sentences it's figured out an algorithm to predict possible answers for all of them.

And how it knows what answer to give you is based on context clues. So if it sees the word bacon. It is looking in a multidimensional space where words are grouped together and there's one grouping in this multidimensional space that is going to be all about breakfast foods. And there's another grouping in this space that is all about movie actors.

And so using context clues is how the language models know. If that word bacon, if you are talking about Kevin Bacon, or if you are talking about having bacon for breakfast. When we're working with this, because it's just predicting the likely next word in a sentence, we need to remember that this is not a database of facts.

So chat, GPT is not checking in with Wikipedia before giving a response to you. It is just. Using math to determine what answer might make you happy. And so part of what we'll discuss today is how you can let chat GPT and similar tools know that what will make you happy is actually a truthful answer and not something that's been hallucinated.

When we're getting ready, you know, to use these tools. I think the scariest part of them is this very unhelpful screen that, you know, what can I help with? And you're like, I don't know. So that's what we're gonna focus on first. How do you get past that fear of the blank prompt? A great use case is of course, you know, writing content or copy, but not in the, you know, and I use it for that.

It's very rarely, Hey, write this entire thing for me. It's more likely to be, you know, rephrase a sentence for me. Take a really long bio, make it shorter. Don't take the short bio and ask for it to be made longer because that is an invitation for the model to hallucinate, to make up an answer that it thinks might make you happy.

It's also excellent at working with data because again, it's looking to find patterns and data that is what the original algorithm does that determine what word in the sentence might make you happy. So it's really good at looking at your information and finding the patterns and your own data. So if you are working with Excel, you can ask for, you know, what information is contained in your web, your spreadsheet, and that could use, uploading the spreadsheet to chat GPT or if there's private information in that spreadsheet, you could copy just a few rows of it.

Paste those rows into chat GPT and you know, remove anything you don't want to share and explain what you are trying to do, the formula you are trying to write. And it will give you suggestions on that formula for how you can, you know, it could even write it for you and then tell you what cell to put it in.

So it becomes a much more useful helping tool than going. You know, through the Microsoft Excel help menu or trying to search for the answer online. So now we're at the interactive part, so please, the QR code, it just takes you to chat GPT. So if you already have that open. Go straight to chat GPT or the AI tool, you know, that you typically use.

So that could be, uh, Gemini from Google, that could be Claude from Anthropic, Microsoft, uh, copilot. So go to a website where you can use chat GPT. That could be chat.com. If you're using your phone, I would like you to take a picture of the screen. Uh, and that's another just fast tip for working with AI is that you don't necessarily have to type anything.

These tools are multimodal, so you can talk to them if that's easier and faster for you, and it can read words that are inside of images. So what I like about this prompt, and I hope you'll email me or uh, contact me on LinkedIn after this presentation and let me know what your response was, but I want to illustrate that where chat GPT really shines is on questions that could have infinite answers because there's no right or wrong answer to what kind of campaign could turn Minnesota's winter weather into a tourism asset.

That's not a yes or no, that there's any number of responses for that. And so this is an opportunity to see that in action. Every single person on this webinar gets a different response for this prompt. Whereas if you think about questions that only have one correct answer, like what is the weather? Or you know, what was the score of the game yesterday. That is still an excellent use case for Google because that is where you were going to be able to check sources and see where that one true answer is. So now I'm going to teach you how to cheat on papers.

Uh, but I like to give this example because it shows you how I think you should vote, you know, uh, approach writing using ai. So the way that we think college students cheat on their homework is just open up chat, GPT and give it the, the assignment, right? Write a six page close reading of the id. If you're a good cheater, what you actually do is say, I need to write a six page close reading of the Iliad, give me options for, for thesis statements.

And so what makes that different is that the, the student in this case is breaking down the task into smaller chunks, so. The best way that you will, you know the, the best use cases you will find for using these tools is when you are able to take your own process and break it out into component steps.

So here, great. We have some options for thesis statements. It suggests writing about the role of women in the Iliad, and I was like, yeah, that sounds great. So now what's the next step in that process? You write an outline. Ask chat GPT to write that outline for you, and now you have something to react to.

You can look at it and make changes. You are, there's no law that says you're required to write anything that chat GPT gives you, right? It's a partner for us. It is not our boss. Uh, and it gives you, uh, the opportunity to, you know, remember we can't take these things at face value. So one of the. Sentences it gave me in this outline was that Helen of Troy caused the Trojan War because she was too beautiful.

I thought about that and I'm like, well, I don't wanna write a paper about that. Maybe it is the fault of the men for fighting over the pretty girl, and maybe they're the ones who caused the war. So go back, push back on the language model and say, I don't think I agree with that. And then, because it's very, you know, sick of fantic, it wants to make you happy.

So, oh my goodness, you're so right. You know? How smart of you. Thank you. Here's the new, you know. Uh, take for that paragraph. And if you were to go and then write a paper using, you know, these tips from chat GPT, like, it's going to be completely in your own words, right? That's gonna be the student's own work.

But I wanna remind us all that when we are at work. We're not students necessarily. And so for our jobs, it is not cheating to use ai. And that is one of the kind of secret things that live in the back of our heads rent free that I want to help us overcome. Uh, in many cases, I know many of the folks on this, uh, call work for dmo.

We are nonprofits. So I think we have a responsibility as stewards of public funding to make sure that we are using it in the best way possible. That we are not spending seven hours to do a task that AI could help you do in seven minutes. And for commercial companies, you know, think about this from an agency model.

If you hire a lawyer, do you want to pay, you know, the law firm for seven hours of discovery work? That could have happened in seven minutes. And maybe right now that answer is yes, but I think we're seeing that answer change, and I think part of that change is us realizing that AI isn't cheating. Now, I'm gonna walk through an example of how you can create campaign strategy using ai.

Again, we are going to take the approach of looking at this step by step. So you wanna start, if you were making a campaign, like what are the goals of the campaign? You know, do you have research to be able to understand your target audiences? You know, have you done a SWOT analysis? You have a. Clear, unique selling proposition.

So having a clear process really helps you to get the most use out of chat GPT. So the way to get started, I think, with any process that you want to be grounded in, truth is you don't wanna trust whatever is, you know, in the underlying knowledge of this stat of, you know, underlying data of the large language model.

You want to give it the information that you consider to be the truth. You want to prime that prompt. So what does that mean? What does that look like? So here in this example, I am walking through, uh, a campaign that I worked on for New York City tourism a year ago, uh, around America two 50. And how is the city going to celebrate the 400th anniversary of New York City and the 250th anniversary of the United States?

So how do you wanna start? Find research? Where is research? It's still at Google. So Google, even though they are, you know, making a lot of changes that incorporate AI into their work as well, Google hasn't gone anywhere. It still exists and it still serves a different function than doing that same search in a tool like chat, GPT.

So go Google for these sources of research. Uh, another great tool you might not be familiar with is a search engine called Perplexity. I think it's perplexity.ai, and perplexity is a search engine that was built entirely around ai. So now most of the language models offer some version of this. You can do search, you know, natively inside of chat, GPT inside of Claude, obviously inside of Google's Gemini.

Perplexity just has a different way that they have wrapped everything together. I think it's really interesting the work that they do. So give that a try. When you are looking for sources of research. Here, you can see that I have found five different sources from perplexity, so that gives me an opportunity to download the answers because just like we're seeing in AI overviews on Google search, when you get an answer now, when you put in a search query in the prompt window, you're going to get back an answer to your question, and then you will get some footnotes with those sources.

And then I think a really interesting tool is called Google's Notebook, lm. Uh, so this is baked into the Google Gemini plan. Now, I think they might still have a free version, but it's very cool because it allows you to create what they call notebooks. And you can see here I have a variety of notebooks on different topics.

And when you have a notebook. Here, this is the opportunity you have. You upload all of your files, and in this instance I was uploading files about, with research about, uh. Who travels for heritage, who travels for culture, like what would these target audiences for heritage tourism look like for New York City?

And you are able to ask questions about your sources. And then here it's giving me an answer about, you know, how the travel motivations for a heritage traveler and a cultural traveler are different and it's giving me citations. And when I click on one of these citations. On the left, it opens up the the source that I was looking at, and it will highlight the part of the source that it used to answer the question.

So for anything that you are doing that needs to be very grounded in truth. This is going to be helpful. It was actually created by a division in Google that was looking at products that would support students and researchers. So it wasn't meant initially to be a commercial product. Uh, but now you may have heard of it, uh, in last October because they came out with a podcast.

Version of Notebook lm. So not only can you ask questions of all of your sources, but you can press a button and it will generate a 10 to 15 minute, uh, podcast that sounds very natural talking about your material. And you can now make edits to that podcast. You can interrupt the podcasters and ask them questions and they will have a conversation with you and Notebook.

LM will make a mind map. Out of topics that are contain, contained in all of the source material you upload. So really cool tool. And so let's say we have all of this information loaded into Notebook, lm, or you can even upload it to chat GPT or the tool of your choice. It's given you a primed prompt. And so now all of the other elements that I outlined you can use this prompt to help you with.

So looking at the competitive landscape. When New York City is thinking about, you know, America two 50, we knew that we were in a slightly different competitive place in the market than Washington DC or Philadelphia or Boston. And that's because New York City tore down a lot of our old stuff. But we knew that we're still, you know, a very important player in what happened 250 years ago.

And so use chat GPT to spell out what does that competitive landscape look like? Have it help you outline and define your target audiences. Then move on to the steps of writing the brief for your creative team or for your ad agency. So look at what problem does the creative team need to solve? What is the objective of this campaign?

And then I used all of this information to put together like a really good creative brief for the New York City tourism, their in-house creative team. And then this is the really important part. There's no rule that says that. AI has to do everything for us, and AI has to do the part of our job that's the most important or that we value the most or enjoy doing the most.

So here humans came together and did a lot of work to write the positioning statement for Founded by NYC, which is the campaign that ultimately came out of this work. And. The humans typically, like I'm embarrassed to say, I don't think I put that much work or energy into putting together a great creative brief in the past.

So again, yes, maybe this sped up work and maybe it. Didn't, but I wasn't looking at it as an exercise to make things as fast as possible. For me, this was an opportunity to do more thorough, more thoughtful work than I had done in the past. And so remember, AI is a great partner for that type of work as well.

Now I'm going to take a little bit of time to talk about watch outs and governance. What do we need to be concerned with when we are using, uh, AI tools at work? So first we need to think about how do we keep our information secure, safe, and with integrity? And these are topics that I'm going to address a lot on future webinars.

So. As you may have read in one of the emails about this, uh, the Agents of Change webinar is gonna be a series I'm looking at doing it approximately every other week, and we're going to flip between practical use cases for d os and, you know, so getting tactical and looking more at the strategic layer.

Uh, so in future strategic, uh, webinars, I'm going to focus on a lot more on things like. AI safety and what kind of systems do we need to set up so that our staff, our teams, are using AI appropriately at our organizations. Uh, but to give a really top line overview of this information. Status security. So that is making sure that the information you put into a tool like chat, GPT, that it can't be, you know, stolen by bad actors.

And the easiest way to make sure that you are protecting data is to use a paid version of an AI tool. It's very likely you have heard the, you know, the, the saying that if you, if you're not paying for a product, the product is you. So. It's still true, and if you're using a free version of a tool of like chat GPT, it probably has training.

The underlying model turned on. What does that mean? So anything that you put into a language model, it is traveling to the cloud. Just like you know, you're writing something in your Gmail account and in the cloud is where the language model actually takes your prompt, puts it into the language model, and generates this response that it then sends back to you.

Chat, GPT, like OpenAI has, they are looking for more information to train future models. All of these companies are, and. If you are using it for free, they're saying, great, we're, we're happy to have you as a free user, but it costs us money. So we are going to monetize your participation in the system by taking everything you put in and every file that you upload.

And we're going to use that to make the next version of chat, GPT even better. So that's not necessarily something we want to do with our, uh, private work documents. So when you get a paid account, you are given the option to turn off model training on your information, and that's really important when we're using these tools for work or if you're using it for personal use cases and it's something you don't necessarily want to share.

So you wanna have that training turned off. You also want to have SOC two compliance on your data. So that just means when your data is traveling to the cloud and when your data is at rest in the cloud, that it is protected to make it harder for hackers to access. Uh, if you have heard of hipaa, which applies to healthcare protocols, that's, it's the same thing.

HIPAA is more stringent than SOC two. But for corporate use cases, for the most part, SOC two is going to be fine. And this is the kind of thing that you wanna have a conversation about, uh, with. Your IT department, of course. Next, I wanna talk very quickly about data privacy. So here we wanna protect people.

And so if you look at uh, GDPR and the EU AI Act, they consider data. You know, to be owned only by the person whose data it is. And so whenever you get somebody's personally identifiable information, their PII like email addresses, mailing addresses, that that belongs to the person and they can allow you to use it, but they also get the opportunity to revoke your use of it.

So PII and language models are tricky because once something goes into the underlying training data of a language model, it can never be removed. It is part of the algorithm and it's there permanently. So we don't want to upload people's information into a language model unless they have given us explicit consent that it is okay with us that they, that.

It that it is okay with them that we do that. So we are very rarely. I am sure getting the consent of anybody who is an EU resident before. Having access to their data. So the best use case here is don't put PII personally identifiable information into a language model. Even if you have a paid instance and you have the training turned off, it would still be a violation of the EU AI Act.

Then the final piece of this is content integrity. And so this goes through the question of what is okay to put into a language model? And in a couple of weeks when I do, uh, the presentation on AI for leaders, I'm going to spend a little more time focusing on content integrity and things to be concerned with.

But it's, again, it's another sign that we wanna make sure we are using versions of these models that have the training turned off because. You don't want every single confidential, you know, company document to become part of the underlying frontier models that power, uh, tools like chat, GPT, other things that we need to be concerned with when we're using language models.

Hallucinations. So I touched on this at the beginning, that these tools are just putting words in a particular order with the hope that it will make you happy. And here, uh, this is from a couple of years ago actually, so I will say hallucinations, this kind of thing has gotten a lot better in the last two years, particularly since search has been baked into tools like chat, GPT.

If I were to do this search now or ask for it to write a bio of me, now it knows that I am asking it something that is not in its underlying data and it's going to go online and search for me and use that information to write, uh, the bio of me. But before it had internet access and it was only using underlying information in the language model, I had asked it to ride a haiku on early morning Amtrak rides because.

That's what I was doing at the moment, and then the next prompt, I asked for it to write a bio for Jeanette Roush. And every single word on here is made up. So I am not an accomplished academic. I don't have a PhD. I didn't study tourism management, didn't go to Cornell or work at Amtrak or any of these things.

So chat, GPT just went to town having some fun. And we have to be careful to make sure that even in more subtle ways. That chat, GPT isn't making something up. So whenever you have AI write something for you, you have to be the fact checker. Uh, it's on, you know, and we may see our jobs kind of pivot in that direction, where instead of spending as much time doing the writing, we may be the ones that are spending more of our time doing the editing, doing the fact checking, making sure that this is what we want to share with the world.

Bias is also a concern when you are working with language models. Uh, they were trained on all of the information stolen from everywhere across the internet. It was that all that was written by humans, humans have bias. So the output of language models, it is based on human writing, so it is going to contain bias.

Just like the example earlier, uh, from cheating on papers, I'm like, that just reflects a particular. Bias that Helen of Troy caused the Trojan War because she was too beautiful, right? And typically all writing is going to have some form of bias in it. If you look at most language models, many of the ones that we use most, most commonly are created in the United States, and they're trained primarily on English language text.

And so there is some kind of bias baked into. Those systems that's going to be very American centric. And so if you are writing for the point of view of another country, you wanna keep an eye out for those biases that are going to be baked into the language. And so there's no, you know, people are working on addressing this, but ultimately, you, it is our responsibility to make sure that the output that we share reflects our own point of view.

And sustainability is a very big topic when it comes to ai and there's, Sam Altman was just, uh, speaking on this very recently, and none of the na, none of the ai uh, companies have been very forthright, which with talking about exactly how much energy do their tools use. So the issue is that the enormous data centers that create the underlying models that.

You know, crunch through all of the information ever written on the internet. Those models need a ton of water to cool down the computers that are doing that work. And so like, just inherently, it is not a terribly sustainable thing to create and to use language models. Now, Sam Altman came out maybe a day ago and said it takes one.

15th of a teaspoon, I believe, of water to power, essentially one query into chat, GPT. It's hard for me to, you know, be able to tell you right off the bat exactly what does that mean if you were comparing it to Netflix usage or an hour of playing on a PlayStation, but. My, my point of view on the sustainability issue is that it's really important for people to understand how AI works, and that means using it a lot.

I think everybody should be using AI a lot more than we are using it right now, because that's what it takes to really understand how it works to get proficient with it so that you have big ideas for how to use it later on, but. We're not, you know, and the reason that we do all of this work is so that we can build bigger things with ai, right?

Like the end goal of AI is not necessarily to, you know, rewrite an email for me. So if I am learning AI now and will create software that uses AI in the future. I want to understand all of the different models and how much energy those different models use because that will help me on a corporate level pick the least, you know, the most sustainable, least invasive version of an AI tool to power whatever I'm doing.

So to have that knowledge, you just have to have experience using ai. So ultimately, you know, what we do as individual contributors is very, very small in the world of sustainability. It's, you know, what happens on that corporate level is going to be much more impactful. So become educated now. So that when you are a decision maker at that corporate level, you can steer the models into the ones that are less expensive.

And what makes them less expensive is that they use less resources. They use less energy and less water to work. So now I'm gonna walk through setting up your chat GPT account. So again, if you're pretty new to chat GPT and you have a second screen, go ahead and have that open because I'll give you a few tips that will help make the outputs you get better.

So first. You'll see that over here on the right side of the screen. That's going to be the menu for where you see all of the controls and settings. For chat. Uh, for chat GPT. So for this first bit, I'm going to go to customize chat, GPT, and that brings up this window. This is the second half of the window, uh, where you get to tell chat GPT things you want it to know about yourself.

So I find it very helpful to let it know, you know, who I am, where I work, all of this information about what I am trying to do, because. That saves me from explaining over and over again what my job title is or what it means, or what is A DMO. All of that I have baked at a, you know, instructions level for chat.

GPT here for what traits should chat GPT have, you can click on these buttons. It will populate inside of the what traits should chat GPT half Box. And I've put in a couple of these things on my own. So I tell it don't use M dashes or the, it's not, it's not just about this. It's also about this kind of sentence construction that we're seeing a lot of LinkedIn and some other places.

Right now I don't want to ever see that sentence construction. So I have put it as a instruction here. It's good to know that when we're giving instructions to chat, GPT, that it could be a little bit funny. So by saying something, you are putting it in its little chat. GPT brain. Kind of like if I were to tell you, don't think about pink elephants, you're going to picture a pink elephant, right?

So chat GPT can do the same thing. It doesn't see the knot. As much as it just says M dashes, it's not X, it's Y. And so it's possible it might actually focus a little more on those prompts when you call. Its attention to it. So if doing these instructions doesn't always work, that's the reason why. Now I'm looking at the settings.

So this is still inside the the chat GPT Settings menu. When you go to data controls, that's when you see the option, improve the model for everyone. What that means is that chat, GPT, is taking everything that you put into it and using that to train a future model. So if you're doing anything private or confidential, you wanna have that set to off.

And the model selector, and that you will see people making fun of this online because it's pretty ridiculous at this point. How many different things there are and how similar they all look. And how on earth are you supposed to know which ones are you meant to use? Uh. This will all get solved at some point because OpenAI will release uh, GPT five and they claim their hope is that GPT five will encompass all of these models and it will automatically detect which one to use to answer your question, and you won't have to pick one anymore.

But in the meantime, I would say GPT-4 oh. That is just as it says here, for most things, this is going to be the most useful tool. The only other one that I would really worry about at this point, honestly, if you have access to OO three Pro, I would try that, but all of these reasoning models. Are going to be basically the same.

O three PRO just was released widely over the weekend, so that's the newest, hottest thing. I would use that type of model on something that you need a lot of thought put into, right, because it's the, the difference between those models and something like GPT-4 oh is that it's. Thinking through many different possible responses.

And if you remember, choose your own adventure books where you kind of follow along. And then you, oh, you know, you have to make a choice and you can skip ahead to page one 16 if you choose this. And page 2 22 if you make the other choice. So it's, it's moving along a decision tree and then backtracking if it doesn't like the ultimate destination it gets to.

And so it's following this chain of thought reasoning process to determine what is the best answer to your question. So if you have something like the creating a Campaign example that I showed earlier, that is something that I would do in one of the reasoning models. If I am looking for, you know, help rewriting an email, I'm going to use four oh for that.

Something else I think is very useful to be aware of, uh, custom GPTs. So. One of the great jokes of working with AI is that the name for everything is horrible, so we're supposed to know, you know, what is a custom GPT and is, how is that different from chat GPT and. OpenAI doesn't even always call these custom GPTs, so it makes it difficult to talk about in a, in a webinar.

But when it comes to how do you practically use a tool like chat, GPT, they're very helpful. And if you use a Gemini, it's called Gems inside of Gemini, you will find custom GPTs here if you're familiar with the the left rail on your chat GPT account. Click on GPTs, and then here it's bringing up something that really the best analogy for it is thinking of Apple's App Store.

You can go through, you can see all the different categories of apps, except in this case it's just categories of prompts that have been pre-written for you. So in some cases. That's really interesting because there are people who are much better, I suppose, at certain types of prompts than I am. So you can explore and see what other people have created.

But truthfully, I really only use the ones that our team has made or that I have made. So if you have a team account, and I think a chat GPT team account. If you are a business with fewer than 150 employees, I think this is the best path forward if you do not have a paid secure AI tool in place yet. And one of the great things is it allows you to share GPTs across your organization.

I. So here I have made a custom GPT for our travel and expense policy, and all that is, is in the background. I have given a prompt to chat GPT that says, uh, you know, here is a copy of our 40 page, you know, PDF file that has our expense policy in it. And whenever somebody asks you a question, you can, uh.

Whenever somebody asks you a question, this is how I want you to address the question. And I will say in this example, you know, this is one of the first things I made when I started at Brand USA. And we've been updating it over the last eight months or so, because occasionally it stops working correctly because AI is funny.

It, it's just, uh, think of it as that quirky, incredibly smart intern who doesn't know anything about who you are or what you do. So sometimes. They changed the underlying model and it changes the way that your prompts worked for these custom gpt. So I had to go in and write the prompt to be more strict because, uh, Alexis on our events team asked about the per diem for Chicago and it gave her the wrong answer.

And so I used actually the deep research function of chat GPT, which I'll talk about in future webinars, uh, to, but I used that to upload where the mistakes were and say. Help me understand. This is pretty simple. How, how could this have gotten it wrong? And it turns out that because Chicago is not explicitly spelled out in our expense policy, our custom GPT said, oh, wait a second.

Chicago is kind of an expensive city. It shouldn't be tier one. It should be, it should be higher than tier one. And it gave the wrong answer very confidently to Alexis. So. We went back and rewrote the rules to say, no, you must very explicitly follow the instructions of the PDFI use chat GPT to help me write those instructions.

And then here we have the perfect just single prompt that easily answers the questions that you have. And so we have a question actually in the chat about what are the different use cases for a project. Versus a custom GPT, so a custom GPT. It's really, and I will tell you, there's a lot of overlap and you can do a lot of the same things in a custom GPT that you can do in a project.

But what a project does, and here, this is where you're going to find projects inside of chat. GPTI don't have very many. I I only have this one set up right now because I actually use Quad for all of my project work, weirdly. But here, if you want to use a project, you're gonna start by clicking on new project.

And then this is what a project looks like. So I, you can upload files, which is also something you can do in a custom GPT. You can give it instructions, which is something you can, you know, in a custom GPT, you are giving it a prompt, whereas the instructions in a project are. It, it's less of a direct prompt because as you can see here, you create the prompt using the prompt window, uh, but you are just telling it overall.

What is the goal of you having all of this information in one place? And then what really makes this different is every time I start a chat in the future of D os. Uh, project That chat is going to get filed inside of that project. So if you see over here again, back in my, my threads, those two chats that I've had about the future of D mos inside that project.

I don't find them down here. I find them up here in the folder. So almost the best use case for this is just helping you be a little more organized if you use a custom GPT every time you open it up. I. And you open it up by coming over, you know here, and you find the custom GPT area and you just click on it.

But every time you do it, it is just a new blank prompt. And that's because if I'm asking about, uh, our per diem in Chicago, the next time I use it, I'm asking about the per diem in Washington DC right? I don't need to access the history of my chat there, here. I'm using this specifically because I do want to access my chat history, and so now before q and a I am going to look at what are the next steps that everyone can take advantage of?

What are the things that you need to be thinking about on your AI journey? So first, please stay focused on your mission. So we're not doing AI for AI's sake. We wanna look at what problems are we solving for our stakeholders. How can generative AI help us do this better or faster? We wanna remember that AI is a tool.

It is not the solution to the problem. And when we're looking at organizational change and how do we all move forward with AI adoption, there's two approaches and we need to do them both at the same time. It's top down and it is bottom up, and you cannot choose between them. You have to have both. So for any leadership that's on this call, and again, in a couple of weeks, I will be doing another webinar that, uh, is going to be specifically dedicated to leadership, uh, but make an AI committee.

The idea here is that we need to get AI use out of the shadows. If people are finding ways to save time or do things better, we need to share what those ideas are. We need to adopt guidelines for generative AI use. Uh, and this is another question that just came in, uh, over the chat. How do you deal with, uh, people uploading proprietary data?

I, and the way you deal with it is your organization needs to have guidelines that outlines what is okay and what is not okay to put in a large language model. So on the next webinar and I. Don't have the date off the top of my head and I meant to. So Allie, maybe you can put that in the chat so that people can see it.

Uh, but for the next webinar, we're going to go pretty in depth on AI guidelines and what should you put in, uh. Ultimately, and that's going to be different for every, for every company because every company is going to have a different risk profile when it comes to working with ip. Everyone is going to have different contracts with vendors.

Uh. One of the things we need to think about is if you are asking yourself, is it okay to put this into a language model? You need to think about is it a a secure account or not? Because the secure accounts have training turned off. Or is it a free account where anything you enter would be kind of subsumed into the, uh, into the model?

So you want training turned off and then you wanna look at those contracts because if you are buying proprietary research, let's say if it was research that was custom made for your organization. It might be okay legally to put that into a language model that if you are buying syndicated research, there may be a clause that says you cannot share this research with a third party and chat GPT is a third party.

So in those instances, rather than throwing up your hands and saying, shoot, well, I guess I can't do it. Have the conversation. Because research companies want us to use their research. This is an excellent way to make sure that it is being used like research to put that into custom GPTs or to put that into a project to inform your strategy.

Fantastic use case, uh, but you want to make sure that you're doing that properly.

Then the bottom up approach. So for the individual contributors, how can you get better at using these tools? I'll say what I did when I first started working with ai, and I guess, guess I could have shared this at the beginning of the webinar, but I. I am not a technologist. You know, I came to this as a very curious person, but you know, my background, I'm a theater major, so I promise you that you do not need to have some kind of special tech background in order to get amazing things out of working with these tools.

You just have to do it. So in January of 2023, when chat, GPT was new and I really wanted to understand what it could be good for. I opened it up on my second screen and once a day I would just ask myself, I wonder what would be a, you know, I wonder if this thing that I'm doing, if there's some way that AI could help me do this thing.

And I try and sometimes it did and sometimes it didn't. But either way, I learned something and then I would share what I learned on LinkedIn because I just knew not enough people were sharing what they were learning about ai. Uh, so using it and using it for things you may not think are the perfect use case.

Is how you need to get started. Uh, I have heard that this might be a Gen X kind of issue with using ai. Is that, and I clearly, it wasn't true for me and I'm the Gen Xs, uh, but everybody says, oh no, I'm big fan of ai, very happy to use ai. I'm just, you know, I'm waiting until I have the right thing and then I'm going to do it.

The right thing doesn't exist. You know, the people who invented these models have no idea how they work, so, right. They, they don't know what they can do. They're certainly not worrying about how, you know, the tourism industry or D mos are working with their tools. So that's why we need to share. I share our ideas because we have to build the use cases together.

Like we have to make that user manual because nobody is going to make it for us. And I wanna thank everybody so much, uh, for joining today.`,
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
    transcript: `My name is Janette Roush and I am the SVP of Innovation and the Chief AI Officer for Brand USA, which is the destination marketing organization for the United States.
And today I am very excited, to share with you AI tool playground. So I'm going to walk through both kind of the tech stack that we use for AI here at Brand USA -different tools that I use personally, tools, in some cases that I don't use that much personally, but I know are important for other folks.
And give you a well-rounded look at what's available for text generation, images, videos, creating presentations, and a little bit more.
And as always, I want to begin by sharing with you my AI agenda for the industry. So first this image, we will be introduced to this tool later on in the presentation, but it is from PIKA Art, and all it does is make cute little videos like this, little animated gifs that I think are really good at drawing in someone's attention.
But then looking more holistically at what is my AI agenda at Brand USA, it's to establish operational, excellence for Brand USA as a destination marketing organization. So making sure that we're taking advantage of opportunities to level up the work that we do internally. Second is industry empowerment.
So how do we take what we are learning internally and sharing that with the broader industry to help all of you in your work? And then finally, the third part is the traveler experience enhancement. So what are we able to do in order to make the United States more discoverable and more bookable by, leisure and business travelers across the world?
So that is my goal and part of the Agents of Change webinar series is really focused on number two, industry empowerment. So I'm going to begin this webinar by talking about frontier models. These are the basis of our work with AI tools. So this would be all of the GPTs that are inside of ChatGPT.
So whether it is GPT-4 oh. GPT oh three as in this example here, all of that inside of ChatGPT is considered, those are considered foundation models for ai. And so I believe the best way to learn how to use AI is to pick one of the frontier models that I'm going to show to you and just invest in a paid version of that tool and invest in the time spent becoming accustomed to what it's good at and not good at.
Thinking about this both from a text perspective, but also from a multimodal perspective, because we're going to go a little bit deeper into image generation and video generation, sections later on in this webinar. Right now thinking about frontier models, this is really the home of where all of the power of working with these tools is going to be.
All of the other, tools I'll show you later, will be built on top of these models. And if you are looking for one model to use at your DMO or your organization, honestly, I think ChatGPT is still the way to go. I would look obviously at a paid account, either a team account if you have fewer than, 150 employees or an enterprise account if you have 150 employees or more.
And just in terms of capabilities, I believe that ChatGPT has the widest, most broadly useful capabilities for most people and for most teams. An ancillary to this that I did not call out separately in this presentation would be using a co-pilot from Microsoft. That tool is built largely on the open AI models.
What makes it different? My understanding is that it's less powerful than working directly with a tool like ChatGPT. The trade-off is that it is substantially more secure, so it's going to have the same security protocols in place largely that you would have with all of your other Microsoft tools.
So all of the work that we do, for most of us that work lives in the cloud anyway, so it does make sense to use services that are already connected to our data in the cloud. If you're a Microsoft shop, that's going to look like copilot. The next Frontier Model tool that I really think is terrific is from a company called Anthropic, and this tool is called Claude.
What I do really like about it though is that it is a terrific thought partner and it is a better writer than ChatGPT.
So whereas ChatGPT, everything I get out of it lately, it's not only filled with M dashes, but it's filled with the sentence construction of, it's not about X, it's actually about Y. And I see this all over LinkedIn and all over the internet. I don't use AI a ton for writing anyway, but certainly if I were to, I'm going to lean a little more on Claude than on ChatGPT.
I also like Claude because if you are having a long conversation, so whether you are sorting out the best strategy for something that you're working on, trying to learn how to do something, anything that would create a really long thread ChatGPT I find gets a little circular in that thread where after a certain number of interactions or when it's context window, which is its short-term memory, when that gets too overloaded, ChatGPT will start to just give you the same responses over and over again.
Claude I find is less likely to do that. It's also just a good way to learn that different models will respond differently to the same. So if you have the ability to subscribe to two paid models, I think that is a great way to learn how AI behaves differently, when it's trained differently.
And Claude is a great option for a second model. The other option, which I think would be good for that second model is Gemini from Google. I do have a personal account that I will use for personal projects on occasion, just to keep up on how Gemini works and how useful that tool is.
I'll say if you are in the Google ecosystem, if you use Google Workspace, you very likely already have access to the paid version of Gemini. And if you are already trusting Google with all of the rest of your cloud infrastructure. I don't think it's, a leap to then also trust Google with your AI infrastructure.
So Gemini, it has less than a of a personality, I think, than either ChatGPT or Claude. So I don't always enjoy the back and forth as much, but this new model, the 2.5 Pro model is on par, with the best models available from both Anthropic and open ai. So it's overall, it hasn't always been a great product.
I'd say today it is. It's a great product. It just doesn't happen to be the one that I use most of the time. And the cool thing about Google is that when you work with it, you also get access to other tools in Google's ecosystem. And one of those that I really like is called NotebookLM.
And this is great if you are doing work that needs to be very grounded in truth. When you don't want AI to hallucinate. So Notebook LM was created by Google researchers who were creating a product that would be helpful for students and for researchers. So this was really designed for an academic environment, and what it's meant to do is make it easier to learn something.
So here you can see that I'm in a notebook. The notebook's name is AI's Disruption of Travel Search and Booking. And here you can see that I can add sources to my notebook. And I have in my NotebookLM folder a number of different notebooks on different topics. So that's a great, it helps you keep your information organized.
But then when you add sources, you are now able to come over to this box, this window. And you can start typing into this window and it will answer your question. And if you click on one of the footnotes that it gives you, it's going to open up your source and it is going to highlight the portion of your source where it got that information that it is using to answer your question.
If you're writing something that has to be factual, this allows you to fact check against your own sources in real time, which makes it a very powerful tool. It also has a lot of capacities to help you learn things. So over here, you might remember this tool from when it became famous in October of last year because it released the opportunity to create a podcast from those documents that you uploaded.
It's called Deep Dive. It has, you see here, two hosts by default, but you can also customize that podcast and so it reads through all of your sources, and then it will create a 10 to 15 minute podcast that sounds like it was ripped from NPR in order to teach. Whatever it is that you wanted to learn from those sources.
Take your last annual report and see what that sounds like when it's two NPR podcasters having a conversation about it. You are also able now to jump in and join the podcasters in their conversation so you can actually ask questions. And then down here you see you can also make a study guide with the materials, a briefing doc, FAQs timeline, or making a mind map.
This is an example of what the mind map looks like for this small notebook that I was putting together. So we're looking at the future of DMOs in a changing world, what are our key challenges? And here you say, oh, it's shifting consumer behavior and what is the role of the DMO? And you can double click on that and it keeps going deeper and deeper into the topics that you're interested in.
Now I'm going to take a couple of minutes to go through some image generation tools. The first one of these is ChatGPT. And so actually I am having, for the ways that I use image generation, which honestly it's either for LinkedIn or it's to punch up a presentation or it's to make a joke in a work email, right?
At Brand USA, we don't want to use AI generated images to promote a destination. But that doesn't mean that destinations and travel companies can't find lots of ways to use AI tools. So here I'm drowning in paperclips. If you are familiar with the paperclip maximizer thought experiment about AI agents, this was meant to illustrate that point.
This is, I clicked on a tab in my ChatGPT account that's called library. And if you click on that tab yourself, it will bring up all of the images that you have used ChatGPT to make. This image right here, this sad face, was particularly interesting because I asked ChatGPT to create an image of what it felt like to have a conversation with me and that was the output.
So that it's a real feel good moment. If you want to see, what does it actually take to create an image in ChatGPT. This I have edited and sped up quite a bit, because these image generation tools are not fast. So in all of these cases, it's taking probably two to three minutes every time I'm making an image.
So here I uploaded my own headshot and I said, please, use this to make an image of me making an image. And instead, that's not me. I wanted this person to be the one making the image. And so I am just using plain language down here to say I actually wanted to show me in the pink shirt using the computer to make an image in ChatGPT make it photo realistic because here you can see they made it an illustration and I wanted it in a horizontal aspect ratio. And so now it doesn't give me any notes back. It just starts to work. You can see it's made a really unsettling, creepy version of that image of me.
Another image generation tool that is very well known and popular is Midjourney. I think a great tip for using Midjourney is that when you log in, you are taken to a homepage that shows you images and videos that other people have created, and that is a good way to learn how to best prompt these tools.
A great way to learn more about working in Midjourney is just to click on one of those images and see what prompt the user used in order to create that picture. Because AI rewards, people who are subject matter experts. So when it comes to creating a campaign strategy, that's something I did before AI existed. So like I'm a super user when it comes to doing that in AI. I could not create images before AI existed. So I am not a super user by any means of the image generation abilities of AI, but for people who are good at creating images, midjourney is particularly unique because it wants you to use the language of images and film when you are talking to it.
And because I don't really have that vocabulary, I can cheat, I can ask ChatGPT to write prompts for me in that style. But it's not, language that comes to me naturally. So I have heard, podcasts where people talk about, they were creating a brand identity for their, solopreneur company.
You can do that by just scrolling through Midjourney and pulling out the images that really strike you as interesting. Then use those images and those prompts to learn more about, okay, what is the style that I like? How do people describe the style that I like? How do they talk about it to Midjourney to create more examples of that style.
We have a question in the chat about whether there are copyright issues. Copyright is a rapidly evolving space when it comes to the US legal landscape.
Originally what the copyright office said is that you must be a human being to have a copyright on an image. My understanding is that if AI makes it, it can't receive a copyright, which means you can't be in copyright violation supposedly by using that.
I know that this is a concern if you are using AI to write for you, AI can plagiarize without knowing it because it's just putting words in a certain order to make you happy. So if it makes up words in a certain order, but they happen to also exist written in that certain order, you would be violating somebody's copyright by using those words in that order. We have a resource here, copyright.com. Julia is sharing as a resource, so that will be good to look into. If AI made an image of an Amazon Alexa device, I don't know if it means, oh, great, you can use that without any kind of infringement because AI made it, because AI is making an image of something that is protected, my understanding is nobody else can have a claim to it because it's the AI that generated it.
And now here we have a screen grab of me creating an image inside of Midjourney. So here you can see you type what your prompt is into this box that says, what will you imagine? And this is very sped up. So this whole process was probably three or four minutes for me to get to this point that you're seeing. And anytime that you generate an image, you see over here, it gives you four different options. Then you can select one of the options and then it brings up opportunities to make edits to that particular image.
You can ask it to vary it, to upscale it, to create it in a different format. None of these images that Midjourney is creating for me here are particularly wowing me.
But also 20 minutes later I was like, okay, I don't actually have a need for this image, and so I moved on with my life. It's an interesting example of what's actually possible with these tools. And I've definitely used Midjourney to create a lot of the images that I share in presentations.
Moving on to the next section, video generation and editing. This is going to walk through what editing in Descript looks like while I talk to you. Descript is an editing tool for video and for audio. I first learned about it listening to podcasts where the podcast hosts were using Descript to edit their podcast and then talking about that on the podcast.
And it's great because you can see over here with all of this text. This is the very first Agents of Change webinar that I did, back in June. And so you are able to work over here. This button for the AI Underlord will bring up an AI video editing assistant that I can say remove all of my, ums and ahs.
And then over here you can see where it deletes out. And then I can hit accept in order to accept those deletions, I can make an AI version of my voice. So if there's something in the webinar that I didn't say the way I wanted to say it, I can actually delete that section from the text type over it, and then it will use the AI generated version of my voice to update the recording.
And all of these recordings are available on Brand USA's website. And then the other thing you're able to do with these tools is, like I plugged this, 101 video. I am in the process of turning that into TikTok educational content.
So if you wanted to have a 101 course that you didn't want to sit down for 50 minutes and just watch it sitting at your computer, maybe you want to watch it on your phone scrolling through TikTok videos. I was able to replace myself with a yarn avatar of myself talking against the background of these slides, using my voice, the actual recording from the webinar, with the hope that it's another way of reusing content.
And I think that is a big push for live events in the near term future, is making sure that when we do a live event, we don't leave all of the great education that happened on that event on the floor, when you come home from DI you have the opportunity to expand on that content.
So you can take those webinar recordings and your AI can go through your entire transcript and then pull out what it considers to be the five most interesting segments. And so it will actually create, social media, promo videos for you.
Do you want it to be oriented for LinkedIn or for Instagram reel, or do you want it to be formatted for TikTok? So it's been a really great tool. They're making improvements to it all the time, and it doesn't require any AI expertise if there is such a thing to use. You are just having a conversation about what you want your video to look like.
I think that's the ultimate promise of these AI tools.
This is another video tool that is called Runway and very similar to all of these tools. It's just text-based. You go into the tool and type what you are looking for. You can offer it images to use as a basis, and then it can create things like a gif, which is what you see here. The prompt that I had given it was that I'm at IPW and I'm going back into my hotel room after a long day and I open up the closet and all of the IPW branded tote bags fall from the toilet and crush me.
So I gave it the IPW logo. As you can see, it doesn't look like that at all, and I don't exactly look like the same person emerging from the closet as I did going in. But again, for fun, simple video editing, absolutely an option.
And then this shows you what the tool looks like when you're using it. Again, I've really sped it up and here I've given it a copy of my headshot and I said, show this woman soaring through the New York City skyline. I was very disappointed with the outcome because why would that be at all what I had asked for, right?
I'd accidentally had done that same prompt twice in a row. So I'm like, maybe the second one is better, eh, not really. But again, these tools reward expertise. Oh, and I have a question from Yolanda. I did not record myself going into the closet, so this entirely AI generated. I just uploaded my headshot and the logo for IPW and told it what I wanted.
And then this I brought up at the beginning of the webinar. There are all kinds of these, small animations that are possible inside of pika. Now I'm going to talk a little bit about vibe coding tools. So this one I am a big fan of. It is called Lovable, and you can find it @Lovable.dev DEV. And in this example, you can see I asked it to create a simple app that helps social media managers create short form content.
But what Lovable is best at is as a front end tool. So making something look really beautiful. So here I use this at IPW to create this, AI walked me through the entire process of both going to Lovable.dev building this.
I then, it told me, oh, if you want it to look a little nicer, we could have an image at the top. This is the type of image that you can create. And I then went to an image generation tool to spin, just a little header for this. this is obviously a screenshot, but you could select the different days of the week that you wanted to make an appointment.
And then when you clicked on this, it would bring up a registration form and then in the backend it connects to a database tool called Supabase, where it allowed me to see who had actually registered for each of those sessions. And so for just making small personal use apps, Lovable is very helpful.
If you also wanted to make a small website for some reason, Lovable is going to be a great tool for that. Sarah just asked, which of these tools are free versus requiring payment? I believe that if you want to make images inside of ChatGPT, I don't think that is available on the free version. I think you need to have a subscription for that.
I know you need to have some kind of minimum subscription for midjourney. I think that is the case for runway as well. PIKA is they do have a free tier available. So I think it's generally, it is more difficult to find a free tier for the video and the image tools just because those are more expensive to run as a product.
But then Lovable, I did this, I still don't have a paid subscription to Lovable, so this entire process was free. and then I made sure that for the backend, which again was this database product called Subbase, I also used a free version of that. So I made sure I didn't collect any PII when I was doing signups.
Like I didn't collect email addresses because I was not fully clear on what the security was of that signup system. agent.ai is another tool that is free to use, for certain tiers. Obviously all of these tools want to get you into a paid ecosystem, eventually. agent.ai is your gateway into creating your own AI agents.
And so this is an area I'm very interested in moving into. an agent.ai is created by one of the co-founders of HubSpot, so this is. Based on years of his relationships. And you could see here we are making an assistant for LinkedIn to hold the profile that you give it of a business event planner and then give you, essentially, yeah, what's the prompt?
You are the very best convention sales person in the world, and pull out all of the information from this profile. That would help me have a really great opener con of a conversation with this meeting planner. And so here you could see where all of the output is from me testing this particular prompt.
And this is the process of creating your own AI agent. You're going into actions and then you are just setting up here. It's just five actions that you are outlining in order to create your own AI agent that pulls from LinkedIn's API the information that you're looking for. And because this is through agent.ai, isn't a fly by night operation because it's through this person who's connected to HubSpot.
He knows the LinkedIn people, so it actually has API access to LinkedIn. So if your prospect has a closed profile, this would not work on LinkedIn. But for anybody who has an open profile, this is legitimately accessing their profile in order to enrich emails that you can send out in the future.
Then this, I is just starting to learn a little bit about this over the weekend. N8N is another kind of vibe coding agent building tool. And so the way this works, whereas an agent.ai, you saw that you outline individual steps. This does the same thing, but it visualizes it as you can see in a different way.
this is a visualization of how you could use N8N in order to create an onboarding process for your IT team. let's say that somebody triggers this workflow or this automation by doing a create new user form submission. That's then going to this tools AI agent. One of the tasks that we'll do is ask, is this person a manager?
Because they're going to be automatically set up in Slack differently if they are a manager than if they aren't a manager. And so this is a good way to start picturing what should AI workflows look like for you, your department, your company over the next year, two years, as this becomes something we all need to start learning how to do.
And then we have meeting and presentation tools. I am building this presentation in beautiful ai and here this is just a screenshot, very meta of what it looked like for me to put together this presentation on AI using beautiful ai.
I just, find it, honestly, it was a terrible learning curve, and now that I am familiar with it, I would have a hard time going back to either PowerPoint or Google Slides to put together presentations. it makes it very easy to put in a grid format. What are my images and texts going to look like?
It's very easy to not only add in screenshots or videos, but to also find other slides from other presentations and add those in. And so that's something I always find to be a pain in other presentation tools. And for me, beautiful.ai has made that absolutely dead simple.
If you have beautiful.ai across multiple users, you can create templates and you can also on those templates, if you were to update your logo. What's cool is that logo will not only update in one spot, but if other users use that same template, that new logo will populate everywhere at the same time. So in terms of maintaining brand consistency over a presentation, I think this provides a lot of opportunities.
I also just, I really like how the transitions work. I like that it has this Ken Burns effect for photos where it adds just this slight movement to the photo that if I'm giving a presentation, I feel a little bit of, an imperative as like the AI person that I'm supposed to have a slightly fancier presentation maybe than other folks.
This allows me to feel like I'm doing that without needing to, become an expert in, tools that are much more difficult to use.
And then I think this is a great sneaky little tool. Oh, I just had a question in on the last one. Can I track analytics on how people are using the presentations? Yes. you can. I don't use that functionality a lot, but every, you can make, like if you do want to track individual links, you can do that and you can see how many times.
That person with their email address has viewed the link. Or you can make, I had links made at IPW for when I was sharing different presentations at IPW. I can go to the IPW version of those links and see how many times those have been visited so I can follow over time. What does the access to the presentation look like?
And then there's a lot of stuff I haven't been using on sharing a password protective link. So whenever you share a presentation, you're actually just sharing a beautiful.ai like web address and then you view the presentation. I believe it uses JavaScript to create a flowing website experience.
So it's a lot easier, to send that than to send, a PDF of a PowerPoint and then trying to get that to be small enough to go over email. It saves a lot of that type of issues.
And we have another question on beautiful ai. Do they create landing pages? if you wanted to create one image and use that as a landing page, I don't think you could make it interactive though. But if you needed a single static landing page, I think beautiful AI could do that for you. I think they have a test period, but not a free tier, I believe.
what I like about napkin AI is that you can just paste in the text from a slide that you are working on, and then it will bring up all of these different ways that you can visualize it. And then once you select the way that you like. You are then able to come over and use all of these little tools to change the color, give it a transparent background to change the font here.
What I think is interesting is that these are the only words on the screen, right? But it's ai so it knows what I am talking about. So it move out of the way of this. So here is data security, protecting systems, data privacy, protecting people. I didn't tell it to write that. It knew that could add some useful context to the image it was creating for me.
So even if you don't end up using what napkin.ai gives you, I think it's really interesting to get ideas for visualizing information here. And then I will go back and I'll create it natively in beautiful AI if I don't like what Napkin created for me.
So then to sum everything up, if you were looking for one slide to take a screenshot of, just everything in one place.
I want to remind everyone that at work it is not cheating to use AI. Please keep using AI at work.
So now I'm going to go into the Q&A and start answering some questions. And we have a question from Tony about tools or recommendations for AI copywriting models and Tony.
I'm typically doing that in a Frontier model. So I will be exploring tools like ChatGPT or Claude to help me with writing a piece of copy. but I think Jasper is another tool that is very well regarded in that space.
Now we have a question about suggestions for a certification in AI for communications, something that would provide best practice with real world examples. I would say the AI Marketing Institute offers a variety of classes you can take and certifications. Allie k Miller also offers classes and certifications, as does Connor Grennan, and you can find all three of those folks or companies on LinkedIn.
Now we have a totally different question from Suzy, which is your information safe and secure on paid ChatGPT? What a paid version of ChatGPT gives you is SOC 2 compliance. It's protecting your data when it's in transit to the cloud and while it's at rest in the cloud. And then it gives you the ability to turn off model training. So for any of these tools, particularly if they're offering free access, means that we are the product. The way that we are the product for an AI company is that they need more examples of words used in sentences to train the next versions of ChatGPT, and Claude and Gemini.
And they can get that from us for free by taking all of the information we feed in and keeping it and using that to train the models. But honestly, we don't want our confidential information to be used to train a model. And so by using the paid models, you can toggle off the option for training on my data.
And that also helps to keep your data more safe and secure. But I would say the safety and security is not hIPAA level, so you would not want to put in PII, personally identifiable information like email addresses, into a tool. I would not put in information where in your contract it states you may not share the information with a third party because ChatGPT would be considered a third party in that scenario.
But don't use that to be scared off of working with these AI tools. Use that to reach out to the person on the other side of that contract and say, I'd really like to take your research and upload it into ChatGPT so it can help to guide my campaign strategy. Can we make an addendum to the contract that just outlines that under these circumstances I'm allowed to do that? Because the more of us that start asking for this, the more we get AI use out of the shadows.
And then we have some questions about agent ai. Keith asked, which AI does Agent.ai use? One of the coolest things about Agent.ai is that when you get to the steps, so the way that you build this, it's really building a workflow, right? One of the steps in your workflow for your AI agent is to take this information and put it into a language model with this prompt, and it has a little dropdown menu, and you can select pretty much any AI model out there.
Their vision for the platform is that if you wanted to build an AI agent and it was beyond your capabilities, you could find the person to help you at Agent.ai in their ecosystem. But also you could just use the agent that someone else made.
And every time you use someone else's agent, it uses credits and at a certain point you have to replenish those credits with your credit card. So that's ultimately how they monetize the machine.
But right now, if you are just playing with it as a builder, it's largely free to do that, you can use any AI model you want, which is really cool.
Once you start making those agents, does it allow those agents to be turned into swarms? The idea of an AI agent Swarm is that right now, maybe you can have one AI agent, or maybe you can string together a chain of AI agents. So AI agent that looks at information from a website and then maybe a second AI agent takes that information and transforms it into another use and hands it off to a third AI agent, which inserts it into Salesforce or Simpleview.
So in the future, some people are working on building a swarm system where one kind of supervisor agent could oversee hundreds or thousands of just single use agents that all do individual small tasks underneath the oversight of this oversight agent. So it is all a little beyond my capabilities at the moment, but I am learning about that stuff as fast as I can.
We're probably a little ways away from that being something that's easily applicable to our industry, but over the next couple of years, it's going to become not only more common to hear this talked about, but more common for regular people like us to be able to build this stuff because that's what's happening in AI is the need for technical expertise to achieve things, that need for that technical expertise is diminishing. And swarms are definitely one of those things.
We then have a question about an example of showing Agent.ai to enrich your email. The LinkedIn example would be a good way of doing that. If you just wanted to enrich an email with more information about who a prospect is, you can build an agent on Agent.ai that will pull from LinkedIn the exact information you would need to do that personalization and then write it for you to put into your email.
And there's other between n8N and Agent.ai, I don't think we're very far from, "okay, great. Now open up the email now send out the email on my behalf". But once we get into that piece, that raises a lot more security questions, then just having Agent.ai do something inside of its own ecosystem. So then that becomes, bring your IT team on board, bring your legal team on board.
I would have to do a great deal of research before allowing an LLM to have any access into our own email and calendar tools, right? Because that's where it can start to get a little dangerous when it comes to privacy.
We have a question about whether Lovable and agent AI can integrate, and I was listening to a podcast that talked about integrating all of these systems actually yesterday. So the idea that we could use Agent.ai to create backends, and then a tool like Lovable dev, which creates these really beautiful front ends and to combine those.
For the IPW project that I did a little bit of the coding, I couldn't get Lovable to just prompt its way to what I was looking for. So I actually mirrored the code base, in a code repo. ChatGPT told me what to do.
Say, all right, you're going to start by this and you're going to mirror it here, and this is how you make an account. You're going to look for this string of text and then you're going to type this over it in order to make the color different. The ability just to use plain language and not coding to do a lot of this work is very impressive and it's just getting easier.
Oh, we have a question about the Plaud note taker. Plaud is an actual little pin that you wear, or you can set it down, at a table during a meeting and it records absolutely everything you say and do during the meeting, which is great or unnerving. And I think for a lot of people that's unnerving. And I'll also warn you that during meetings, there are now a number of meeting note taking tools that do not visibly join a meeting.
So ChatGPT has a record feature that is not apparent to anyone else at the meeting. There's also a note taking tool called Granola that does not alert meeting attendees that it has been turned on. Communication's changing, and expectations around privacy in communication is changing.
So be cognizant of that as you use these tools, because I do think they're very helpful for meetings. I think it's very useful to be able to go back to a transcript and then to pull just the information you need out of that transcript to update a CRM. That's not even just the future, that's today, but we need to, take advantage of these tools in a way that's responsible and sensitive.
Thank you so much for everybody who, joined today and I'll get the rest of the questions sent to me so that we can address them in future webinars.
I really appreciate you joining. Thanks so much.`,
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
    transcript: `Thank you so much for logging in. My name is Janette Roush, and I am the SVP of Innovation and Chief AI Officer for Brand USA, and you are joining us for our second installment in our webinar series, Agents of Change.
I like to start off my webinars with the funny image of my face getting squeezed like Play-Doh, which you can make yourself. It's at PIKA dot art. I share these in my webinars to reassure everyone that I know a lot of AI presentations focus on all the funny tricks you can do with AI, but don't always bring it back to how you can work with AI in your job. This will be the only funny trick you see today. I'm going to spend most of my time focusing on how we are using AI at work and how you can you set up your organization to be ready to work with AI.
And as an FYI, my agenda for working with AI in the tourism industry for the United States focuses on three branches. The first is operational excellence. How are we using AI at Brand USA to be more efficient at our jobs or do those jobs better.
The second piece is industry empowerment. How can Brand USA serve as a catalyst to drive AI adoption across the United States tourism industry? And finally, the traveler experience and enhancement. What are we doing to make the United States more searchable, more discoverable, and more bookable by our international B2C and B2B audiences? That's what I'm focusing on in my role at Brand USA.
I want to start by talking about how are you able to scale your work at your DMO. This is for the DMOs that maybe you've been working with AI for a little while. You have individuals who are using AI to different levels of success across your organization.
How do you as a DMO leader move from just a bunch of people doing random work using AI into creating AI workflows that everybody in your organization benefits from? It's as simple as going to your org chart, looking at your various departments, then double- click on one of those departments.
In this example, I'm looking at human resources and what are all of the responsibilities that fall to your human resources team? Performance management, talent acquisition, employee engagement, all of these different areas.
All of their work is laddering up to these broad buckets. If you want to move from individuals working with AI to individuals working together as a team with AI, sit down and identify use cases for each area of focus. If you're looking at performance management, when it comes time to do employee performance reviews, some of the employees are using AI to write those reviews. And then on the flip side, some of the managers are now using AI to write their side of the performance review. If you are at an organization where that is starting to happen, maybe the solution is instead of ignoring AI and pretending like it's not part of the process, to actually incorporate AI into your process, create some custom prompts that will help both the managers and the individual contributors answer the right questions in the most thoughtful way to get to the goal, which is employees having clear goals to work towards and managers being in line with those goals. That's one example of things that you could look at for these different areas of HR. That's a really important process because it's allowing us to find some quick wins for each of those HR pillars. It also helps people across a department all use AI in the same way.
Another way to help make that happen is to make sure that specific team is meeting regularly on their own to talk about AI adoption. So in this example, if we are creating custom GPTs for the folks that are part of HR to help them write a job description. Let's say you want to have weekly or biweekly meetings just for the people in that department to say, oh, I'm not quite sure how this worked, or, I got a response that I couldn't quite figure out and use that as a learning opportunity so that there's not one person responsible for fixing a prompt if it stops working as well as it used to.
That's something that can happen because the underlying models that these prompts are using change, and when they change, you have to update the prompts that you're giving.
Weekly meetings, regular trainings, help people stay on top of that.
The final reason why we want to do this work is that it helps you collect SOPs, the standard operating procedures for how your company gets things done. Think about what your new hire SOP looks like and how you need to start requisition in new roles, what people need to be notified who needs to write the job description and post it, and all of the different steps for hiring and onboarding that new employee. Once you have those written out, that allows you to do the process of what parts in this process can AI assist with?
What parts in this process can AI do without assistance one day? Because when agentic AI becomes more accessible to those of us who aren't coders or developers, six months from now, it's going to be very plug and play to work with AI agents. But you're going to want to know the steps in a process because not every step an agent will be able to help with. And so writing it out, that's how you can plug in down the line.
This will be the bulk of what I wanted to talk about today, and that is AI governance, because we know your staff wants to use AI ethically. This study, it's a little bit older. It's from 2023. The name of the study ended up being AI Anxiety and Business, because that was all of the outcomes of this study was how nervous employees are to experiment with using AI. A lot of that nervousness comes from not knowing what is okay to put into an AI system. It is our jobs as DMO leaders to make that very clear what it's okay and not okay to use AI to do, but that's not as easy as it sounds, right? Because we don't always know what's okay and not okay for AI to do.
How do you create this framework? I want us to start by thinking about these three common risk areas for AI. The first is data security and how we are protecting our systems. The second is data privacy and how are we protecting the privacy of people? And the third is content integrity and how are we safeguarding the information that we're putting into AI systems?
So first, for data security. I want you to provide paid AI tools for your staff. Even if there's plenty of free tools available. If your staff is already bringing their own paid AI tools to work. So what do these tools look like? ChatGPT Team, Claude Team, Gemini for Google Workspace, Microsoft Copilot.
Those are the predominant safe ways that you can use AI tools. If you are an enterprise- sized organization, at least 150 employees, you can be on an enterprise account. Team is a light version of enterprise, but for between two and 149 employees, there's a lot of benefits to having those secure tools.
We want to use them because they're going to provide SOC 2 compliance. That means that when you put data into a tool, the data, whether it is traveling to the cloud or at rest in the cloud, is less likely to be hacked by bad actors. So that is a safer way for us to use AI.
Also, when we use paid tools, we are able to turn off training on your data.
So that is, if you are on a free account or your own personal paid account, that's a toggle switch that's hidden in settings. The toggle says " help improve the model for everyone." What that means, is OpenAI and these other companies are taking all the data you put in and then they are using that information to train the next version of ChatGPT or Claude or Gemini.
And I don't think you want your data to be used in that way. So get the paid account, turn off training.
Now I want to look at the second risk area for DMO, and that's data privacy. How are we making sure that we protect people when we are using large language models? The easiest shortcut here is don't put PII -personally identifiable information -into a large language model.
If we are looking specifically at the EU AI Act, we do not own someone else's information. You can never own the name Janette Roush. I am always going to own my name and my email address. I can lend it to you for the purposes of joining your email database or what have you, but I can always take back because I'm the one who owns it, not you. With a large language model, an email address is put into the model and used to train that underlying model. It means that all of that information is turned into huge numbers called tokens, and then those tokens are training the model.
Once that happens, you cannot extract information out of the model again. It's there permanently, and because of that permanent nature, it is against the EU AI Act, and it is a violation of GDPR to put somebody's information into a language model if they're an EU citizen. For best practices, using the EU as the strictest use case, it just makes sense to not put other people's information in a language model, even if you have training turned off, meaning that somebody's email address would never go into the underlying model data. Part of that is the EU AI Act states that before you put someone's information into a model, they have to explicitly give you permission. The safest way forward: don't put that stuff into a language model.
And then the third piece is content integrity. How are we protecting intellectual property by knowing what we can and can't put into a model?
I've done a lot of reading and studying around this and talking to our own general counsel and doing coursework for a certification called "AI Governance Principles", which is managed by the International Association for Privacy Professionals.
It's a really interesting area of study, and I am not a lawyer and can't give legal advice, but I have approached this very seriously to understand what is acceptable and not acceptable use of intellectual property and a language model so that I am giving good advice.
The advice that I am seeing is that it's not a yes or no issue, right? It's not black or white. It's not, you either can or cannot put something into a language model. It's more about how are you using the output, or why are you putting something into a large language model?
I am thinking of things like research reports. Many of us at DMOs are working with incredible research on Tourism Economics or any number of companies that have put together these great research reports we want to make sure we're using.
And for me, a great use case for research is to create a Project inside of ChatGPT or Claude. Upload relevant research to what I am working on and then saying, "great, now I have a source of truth in my language model". So if I am putting together audiences who might be interested in traveling for America250, I have all of this research loaded in with information about heritage tourism and who might be coming to the United States in 2026, so that when I am working on a strategy with AI, I'm not just guessing, it's actually giving me useful responses that are based on science. The trick with this is that not all research can be uploaded into a language model.
First, make sure you are in a paid tool and that you have training turned off. Tourism Economics might not want their data to be part of the underlying data of a future training model, so it's unfair to take their information and upload it to a model where training is turned on.
You really need to have that training turned off. And then the next piece is, are you using proprietary research that your company paid for, that your company has a license to use, or is this a syndicated report that the research company is hoping to sell to many destinations? Because we are already working with research in this way.
We already have to separate the research on our own servers from that which is okay to share with our members or partners, and that which needs to be walled off because it's only for internal use. So the question with ChatGPT is it is technically considered a third party. And if this is a syndicated piece of research that says it may not be shared with a third party, that's when you can go back to the research company and say, "I want to add an addendum to my contract saying I am allowed to use your research with this third party when I am working with a paid version of one of these AI tools". If it doesnD't say anything about your research being tied to your internal use, then the question of what can you do with it in AI comes down to: how are you using it?
If you are putting research in to help you with future strategic planning, that is a lower risk use case. Honestly, that's the reason research companies are making research is that they want us to use them to inform our campaigns and inform our ideas. They don't want us to put them into a large language model and then create a new version of them that we then sell ourselves.
That's the whole point of IP law, that we don't get to profit off of someone else's work. And so there are lots of ways to use IP in AI where you would not be profiting off of someone else's work. This is also just a good sign that we have got to get AI use out of the shadows. We have got to stop pretending that this hasn't happened to our industry, let's start putting AI mentions into our contracts so that we aren't guessing, "oh, I'm pretty sure the vendor wouldn't want me to do this". Let's find out what the vendors do and do not want us using with their research, with their sales reports. Right?
Let's talk about BYO AI a little bit. It's also called shadow AI, bringing your own AI to work. Why might that be an issue?
It falls again into three tranches. So the first one's security. We don't have any way to control what people are putting into a language model if it's not procured through your IT department and ran through your company.
So it means there could be a data breach that happens with that company. And because your IT director isn't aware that company information is in that tool, you can't do anything to mitigate that data breach. Privacy risks as I outlined earlier concerning GDPR.
I think this is an important one. When we allow employees to use their own AI tools at work, they retain everything they put into that AI tool once they separate from the company. We don't typically allow employees to keep access to their email accounts when they change jobs. We don't allow them to keep their log in to your server.
So on the same path, you wouldn't want your employees to retain access to your AI tools once they leave the company. Even if it's the employee's own AI tools, if they are using AI a lot, they're putting a lot of information into those tools you may not want them to access once they leave. That's a strong argument for getting a Team account for one of these programs.
There's also operational risks with BYO AI. If somebody is using a tool that's not all that great, you don't have the opportunity to say, those outputs aren't good, because you're using a wonky version of AI, or somebody's knockoff version. Maybe you are using DeepSeek, which is owned by a Chinese company. You wouldn't want your private information to be uploaded to a company located in a jurisdiction we don't have access to. The lack of oversight if we don't know which AI model the person is using, means we can't know if that is a good AI model or not.
And then reputational risks. Your organization needs to be able to stand behind the information you are putting out into the universe and control any reputational risks from bad information, the legal fallout from a visitor being told something that was incorrect. You want to have jurisdiction internally over the tools that are being used by your company. Let this be your motivation to move to a $30 per person per month plan through Microsoft, Google, OpenAI, or Anthropic.
And of course, just banning AI or doing nothing at all also creates risk because there will still be a segment of your staff who will continue to use AI. You just won't know who it is and what they're doing with it, and you're not able to gain the benefits of working with AI because this person is keeping it a secret. They are deciding how they will spend the time they are reclaiming through AI use.
Let's talk about AI guidelines, what they need to include and how you can get started writing them.
First, there's going to be three operational layers for working with AI at your DMO. Internal guidelines will be the most important of those.
Here I give credit to Roxanne Steinhoff and Kara Franker, who's now the head of the Florida Keys DMO, as part of the AI Opener for Destinations program created by Group NAO and M iles Partnership.
Roxanne Stein hoff created a framework for how can destinations think through what should be in their AI guidelines. It is not my IP, so I cannot share it, but you can find Roxanne Steinhoff on LinkedIn or reach out to her through the AI Opener for Destinations program.
It's really about walking through these six elements. You need to think about your vision for AI. Do you have a high risk or low risk approach? Are you "move fast and break things" or very conservative with how you approach AI?
And I'll share, the Brand USA AI guidelines on slides following this slide. You will see how we've made these decisions. But you can't just copy our AI guidelines because you probably will have a more conservative approach to working with AI than we do. I want us to be very AI forward, and that could be a different approach from you.
Ethical principles. You need to determine as a group, as a DMO, how transparent you want to be about your use of AI.
Are you going to include language in your privacy policy? Are you going to include a note by every single piece of content that had an AI component? As an organization, you need to come to an agreement on what you think is right. How are you keeping a human in the loop?
Because AI is not yet at the point where we can trust it to do whatever we want without supervision, confidentiality and safety. How is your organization going to protect PII? How are we making sure that we aren't putting licensed material into these large language models permanently?
Governance and accountability. How are you going to monitor compliance with your company's AI policy? Do you have somebody overseeing staff training or AI use? And then finally offering some practical tips so people know what tools are allowed and if there are new tools they want to use, how could they go about using them?
Now I'm going to share what the Brand USA guidelines look like. We start with our vision, and our vision is to set the global standard for responsible, innovative AI tourism promotion. Again, that might be a little more aggressive than your organization, so that's a question that you have to answer for yourself.
Then when we get to transparency, we want to share when AI has been used to substantially assist with a task or a piece of content. We want to disclose internally every time that we use AI, because for internal use, I see this as part of education. People won't know how to recognize, AI ideas or input until you start spelling it out for them. This is an opportunity to shine a light on the cool stuff that AI can do. I like to say lead with wonder. These tools are not dry and boring. They are a lot of fun, so lean into the fun side of this as well. I like here "we embrace a culture of responsible experimentation". We want to show when we are experimenting and using AI in new ways, because that's going to kick off ideas for what other people can do using AI.
And for responsibility, we always want to keep a human in the loop. Nothing that we're doing here has automated the human out in any way. This example about autocorrect comes from the city of Boston. In May of 2023. The City of Boston released generative AI guidelines where they said keeping the human in the loop is, think about it like writing an email where you have autocorrect and if autocorrect changes a word in your email and you hit send, it's still your email. Those are still your thoughts. You have still represented that this is coming from you. It doesn't matter if autocorrect changed a word you don't get to blame something on, "oh, well, that came from AI, so I thought it would be correct". It is your job to be the human in the loop and to fact check every single thing that's part of that AI output and to make sure that it is representative of your brand, your destination.
You also don't get to tell AI, "would you fact check this for me"? Because it is incapable of doing that. Large language models have no relationship to truth. They are just putting words in a particular order to try to make you happy. That means if you ask it to fact check it, it's going to give you whatever answer it thinks will make you happy in that moment.
Responsibilities: Brand USA, we have a responsibility to keep our staff trained on using AI. Part of our role in providing these tools to the staff is making sure everyone knows how to use them. Then confidentiality and safety. I walked through why that was important already, as well as governance and accountability. So you need to have processes in place because that's going to assist in the future should something go wrong, you need to prove that you have a long history of doing the right thing of checking things.
This could be the case for those of you who have AI chatbots on your website, you may want to set up a regular cadence of red teaming or trying to trick your chatbot into saying something that it shouldn't say. The reason to do that is because the underlying models change and we have to stay on top of training these models. We can't assume it's one and done and "great that worked last week, so that means therefore it will work perfectly forever". You have to keep your hands in it all the time, and so part of that is going to be the constant red teaming because you don't want to find out through a newspaper article three months from now that your AI model said things that it shouldn't.
Part of why you do a regular red teaming schedule and that you have a process for it and that you write down when you do it, and then you annotate whether you saw any errors as part of this process is if in three months or three years, something does go off the rails, you have a track record. You want to point back at your governance documents and say, "it is unfortunate that this happened. However, we are staying on top of red teaming this AI and this is the proof that we did," so it's something to think about if you have a chatbot on your website.
So then to go back to the operational layers of working with AI, we had the internal guidelines. Now you need to think about external partnerships and working with vendors. We want to make sure that all of our vendors understand how they are using AI in their work, particularly if we are buttoned up with our own AI policy.
You wouldn't want to find out that your media agency has completely different guidelines and levels of transparency when it comes to working with AI. It's important for DMOs to have those conversations with your agency partners as new contracts come in. Take a moment to see how AI is addressed. It may be time to start inserting your own clauses saying, we want to analyze the results of this campaign using AI, and ensure that is upfront in this contract, so we're not wondering down the line.
These are the kinds of things to include on a checklist. Is your own IP going to be put into a model? Is the training turned on or off? Who owns those outputs? How will third parties your agency works with be using AI?
Is there an incident reporting process if something goes wrong with your AI materials? Is your agency providing human review at the same level that your company would? It's just making sure that your agencies and partners are aligned on AI use.
And then finally, tool vetting. How do we know any of these AI tools we're using, if we ought to be using them or not? Laura Haaber Ihle gave this wonderful presentation last summer in an AI opener for Destinations Bootcamp. She put this as, remember, you are buying risky tools from strangers, so have some kind of procurement process set up in advance so that you are not just handing away your IP and your data to every company that comes along.
This is my own personal process. You would want to bring your technology team and your legal team into this process. I start by getting the terms of use and the privacy policy, and uploading that to ChatGPT or your favorite tool, then asking what my DMO should be worried about regarding these terms.
You may want to have SSO as part of your security policy. Does that SaaS tool provide single sign-on? Are they using your content to improve their services? Do we own the output of what these third party tools make?
These are all going to be shades of gray. But you want to understand the answers to those questions before you bring the tool to legal and IT and say, do we think that this makes sense at this price point for our organization?
I want to talk through our AI mantras at Brand USA.
First I want to remind you as leadership to stay focused on your mission, that AI is a tool, but not the solution for questions like "what problems are we solving for our stakeholders? And can generative AI help us solve those problems either better or faster?" The mission doesn't change because of AI, but the way we achieve that mission might look a little different.
I encourage us to start small, to think big, that means the tiniest little use cases - for many people it is still "fancy Google", or it's the machine that rewrites my emails for me. Those are completely fine use cases for AI. It gets you into the programs and starting to use them. Ideally, you get invested with AI and start to use it for more interesting, meatier use cases. And then ultimately what we will all be able to do is AI can help us create websites and write apps and software tools that will solve bigger problems for us.
AI today can help you write tools and create software that solves problems, but you're not going to get to those bigger use cases for AI unless you start by treating it like it's fancy Google, unless you start with the teeny, tiny ideas that don't seem like a big deal. So it's fine if that's where you are, that's great because you gotta go through all of the steps to get to the really exciting use cases. Don't be afraid about starting small to ultimately achieve those bigger ideas.
AI adoption at our organizations requires both a top down and a bottom up approach. This entire webinar is about all of the things that ideally you will put into place to make your staff feel supported in their adoption of AI. We need to provide the paid tools. We need to provide those guidelines.
You need the individual staff members to find ways that AI makes sense for their own jobs and to start to build and stack those use cases on each other.
That turns into meeting with the department and talking through what are the ideas that everybody should be using.
Lead with wonder because you are not going to get your staff on board by chastising them about AI use. It's going to happen through everyone's natural excitement about how cool this stuff is. It's okay for it to be fun. AI doesn't have to steal from us the parts of our job that we think are fun. I don't use AI really for writing unless the thing I am writing is super corporate boilerplate copy, because I don't like writing that anyway. And that's the type of writing that AI happens to be very good at.
But in terms of ideation and coming up with problem solving opportunities, I'm using AI every single day for those types of use cases.
If you are curious how you can level up your own AI use, just keep it open on your computer screen on a second monitor if you have one. Every day try to think of something that you are doing that just throw it into AI and see if it can help you or not. I like that approach because the opposite approach is something that I think Gen X is being accused of doing, which is, "oh, I love ai. I am totally in support of AI and I'm gonna use it next week because I have this use case that I read was a really good use case, so I'm saving my AI for that."
Don't do that. Just throw something in there and see how it works. Don't wait for that perfect use case because it's never going to come . Open AI does not have a list of perfect use cases for DMOs. They are worrying about inventing artificial super intelligence, right?
They are onto the next thing. So it is on us to share our ideas for how we're using AI because that's what's going to help the entire US tourism industry remain competitive.
My final note is that it is not cheating when we use AI at work, and I say the term cheating very specifically because Harvard Business Review put out a meta study recently of AI adoption across different regions of the world. In over 200 studies, they found that women's use of AI lagged behind the use of men by 20 points, no matter what subset of people they were studying. One reason for that is that there's something in the back of our heads telling us, this is a bad shortcut to take, this is cheating.
And then you read everything about students cheating and what a maelstrom this has created for education. You could be forgiven for thinking it would be cheating to work with AI. But at work, particularly for DMOs, we are stewards of public funding. It's on us to make sure we are spending public funds responsibly.
And I think that means taking seven minutes on the job that used to take you seven hours, because if that's what AI can help us to do, I think it's incumbent upon us to run with it. So that is my encouragement for you.
We have a couple of questions.
How many of these tools should you have at your organization? I would say it would be really, honestly, one. The best possible use case would be, get the paid team account for ChatGPT. That is my number one resource.
I'd like to have two different language models because I think that shows people they do different things. It shows our staff that AI isn't a monolith. We use Claude and ChatGPT internally, and I like Claude because if you work with OpenAI and with ChatGPT a lot, I find that all of the writing at a certain point gives you the same answer over and over and you can't get out of that log jam.
I find that that happens less in Claude. I will get more creative original ideas there and the writing's a little better, but if I were to only use one for me, it would be ChatGPT.
What are my favorite resources, outlets, and thought leaders for keeping up with AI development?
In terms of podcasts, I listen regularly to the Hard Fork Podcast from the New York Times and to the Marketing AI Institute. They have their own standalone podcast with Paul Roetzer and Mike Kaput.
I really like Ethan Mollick. He is a professor at the Wharton School of Business and writes very prolifically about AI and the science of change management and working with AI. He has a lot of interesting insights.
Connor Grennan, who is the Head of AI at NYU also does a lot of work with change management and posts about that online. Both Ethan and Connor have email newsletters that I find really helpful.
Then we have some requests for use cases for ChatGPT. I like to say there is no prompt pack to download, right? I would start with just trying to teach it like it's an intern. These things, they are the smartest intern that you have ever had, but they don't know who you are. They don't know what you do.
Just like how you have to overexplain stuff to an intern, overexplain what you are doing to the AI. That's giving it more context, that will help it give you better answers.
Now we have a question from Beth about where in the organization have we seen ownership of AI usage and policies? Ideally it should be a blend of people.
I could see that living with your COO and I have had conversations with COOs who are putting together their own policies.
Outside of that role, I think it's a partnership between IT and legal, but really for rollout then to happen successfully, you want leadership from all across your organization. You want HR to be involved in that. You want to have the operations team involved and then you want to make sure that leadership of the other teams are a champion as well. Because if your CEO is a champion, but your CMO isn't, you're not going to have the same AI education flow and acceptance throughout the organization as you might want.
All right. When using a team account, do I give each of my vendors a seat or is this where legal agreements are needed? And you want your vendors to have your own, their own team or paid accounts? For a team account, it's tied to your email address. So your vendors can't be on your team account unless they have an email through your company.
So that's where you will want to have stricter control set up where they make you comfortable that they have their own team or enterprise accounts. For the most part, it will be hard for them to be on your account.
Do I have recommendations for the best industry AI training or certification?
I think of this webinar series as an extended course in AI. And I am working with a tool called Descript, which is an AI video editing tool, to edit these webinars into bite-sized content on TikTok.
Will I have an official certification as part of that? Stay tuned and we'll see how it rolls out. And that's the thing, , any certification right now is only going to be as official as you decide it is. There is no official governing body of AI handing out official certifications.
I think there's a lot of really useful, classes on LinkedIn learning. Find the people that you think are interesting, and most of them are creating educational and video content around the work that they're doing. So I'll say Allie K. Miller is one of those people with an AI course that ends with a certification.
So is Connor Grennan. So if you want the certification, I think that's possible, but there is no industry wide cert yet.
If I had had more time or more of a legal background, I am very interested in the AIGP certification from IAPP, the International Association of Privacy Professionals. They have a certification called the Artificial Intelligence Governance Principles, and even going through the coursework for that is an education. I have learned a lot about AI in the process of learning about AI governance.
This will be our last question: are there any AI tools for the DMO websites specifically and for the website users that you recommend? If that's a question about chat bots for websites, there's a number of different companies. We just launched our own AI itinerary builder tool. Please go to America the beautiful.com. We have a partnership with a company called Mindtrip that you will find on that website. It includes buttons all across the website that allow you to engage with this AI trip planner tool. We are learning all kinds of stuff about working with chatbots and itinerary planners through that process.
There's a number of other great companies doing that work, and I could see that being a fun topic for a future webinar.`,
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
    transcript: `Thanks to everybody for joining today. I'm Janette Roush, the SVP of Innovation and Chief AI Officer for Brand USA. And today I am here to talk about custom GPTs, your new AI colleague. A custom GPT is a reusable prompt inside of ChatGPT that has your instructions and files saved so that you can use it over and over again.
For this first example, I am going to use a GPT that I created when I first started at Brand USA, and that is for our travel and expense policy. If you haven't played around with custom gpt yet this is a great initial use case if you work at an organization that has an expense policy. At Brand USA, ours is over 40 pages long. When you're filling out an expense report, you need to keep referring back to that PDF file because it contains information like what tier is a particular city, and every time you put in a new receipt to expense it, you have to make a note of which tier city that expense was incurred in.
And previously, if you wanted to keep on top of this, you had to save it in your phone. Maybe you were pulling up the PDF file on your laptop. Maybe you had a printout of the one page that listed all of these tiers, so it wasn't a very easy or intuitive process. Having a repeatable prompt to access that information can make it simpler for people to access what they need, whether they are on their computer or on the road using the mobile app of ChatGPT.
This is our expense policy GPT. I'm walking you through an example of a business trip to Tokyo. What's my per diem in Tokyo? I've entered the prompt. It comes back to tell me that Tokyo is tier four, and then it goes on to cite the exact source for where it received that information.
That it is from page 38 of our expense policy. It shows also that it's tier four, that their hotel minimum, or our hotel maximum is $499. This is the meal allowance. This is the incidental allowance. The great thing about having this in a custom GPT rather than just as a static PDF document is that you can continue to have a conversation in relation to that question.
Let's say I wanted to understand if I could book business class seats on this trip to Japan, and I can, if the total flight time exceeds 14 hours in this particular example.
Why would we want to use the same prompt more than one time? First, this could save time. If you are constantly asking similar questions over and over again, this is going to make it faster.
If you are using ChatGPT, and you currently use a prompt library, or you have a Word document or a Google Doc where you save all of your favorite prompts, this is a simpler way to do that so that you're not always copying and pasting. It's going to ensure consistency across the output. Based on the way you are building this custom GPT, you can ensure that it's going to answer the same or in a similar manner every time you ask a question.
And as an organization, it can help you control quality. I'll show you some other examples of custom gpt where for other use cases, you might want to make sure that everybody is doing something in a similar fashion and a custom GPT can help with that.
How are we accessing these custom gpt? You could see if this you are in the the app version. This is taken from the mobile app version of ChatGPT, but it's going to be similar on the website version as well. If you wanted to edit or view the prompt that you're using, you would just click the top area right here, the expense and travel policy, the name of the GPT, and you can then scroll down to edit GPT.
This is what the backend of a custom GPT looks like.
We're going to walk through this piece by piece first. We have the instructions and that's the actual prompt that ChatGPT is using to respond to your query. This is the actual text of ChatGPT's prompt for our travel policy assistant.
The next piece is the knowledge. This is the context that you are providing to ChatGPT. We don't want it to guess what the correct answer is to the question "what tier is Japan"? We want it to look at facts. We have provided those facts by uploading the actual PDF file of our travel and expense policy.
I've also included a document that's called Default Rule. This is now looking at some of the warts of working with a tool like ChatGPT. If you're familiar with AI, then you'll be familiar with the idea of hallucinations, that tools like ChatGPT will make things up. They are non-deterministic, so it's not like machine learning models, earlier forms of artificial intelligence where they are following a set of rules. If somebody says this, then you do that. They're able to take the prompt that you are giving them, and it's not only looking at your knowledge base, but it's also using all of the underlying information that was stolen from the internet back when they were initially training these models in order to filter through your question to determine what is your actual intent behind that question.
That means that even with something that feels very factual, like this example, it can still make mistakes. I'll give an example of a mistake that it was making prior to IPW this year. Somebody in our team was asking about per diems and other questions for the city of Chicago, and realized that it was answering incorrectly, so we had to troubleshoot that.
I ended up using the deep research function inside of ChatGPT, which if you're not familiar with that, it's available on paid accounts. And it is an incredible tool where ChatGPT acts almost like a Mckinsey consultant, so it leaves your chat window and it surfs the web in order to look at dozens of documents across the internet to analyze and then come up with a solution for your problem.
I had no idea how this could possibly come up with the wrong answer for what tier is Chicago, because that feels like a very straightforward question, right? It came back and said, the list in our PDF file isn't a complete list of every single city on planet earth, and so there's a bucket of our tiers that is just all other cities not listed above, and it suggested that ChatGPT got confused doing this project because it thought, "Chicago's pretty expensive. It shouldn't be the same per diem as some other smaller destinations. So I'll go ahead and bump it up." And obviously that's not something that we wanted this tool to do. That's why when you look at this prompt, it's fairly robust. That is because I worked with ChatGPT to write a new prompt that would make sure that everything that it did was more grounded in truth.
So here we have never rely on outside knowledge. I created this cheat sheet file that again reiterated that any city not explicitly listed in tier two, three or four must be considered tier one. And you need to cite why that is. Previously, the prompt that I used for this GPT I just wrote it myself, and it was when somebody asks you a question, look at the PDF file and then answer the question, and that ended up working pretty well for most use cases, but not for what in AI is called an edge case, not for those individual circumstances where it thinks perhaps it's a little bit smarter than you are.
Again, we can use ChatGPT to write these prompts for us to make them stricter.
Here we have both the travel and expense policy PDF, and this Word document that reiterates the most important part of my prompts so that ChatGPT would be sure to remember.
Other components of a custom GPT include selecting which recommended model you want to use. So GPT-5 is going to be the default. It's probably going to be the best use case for most uses. GPT-4o is still available as a legacy model, and it might offer more consistent performance because GPT-5 is not a model in itself, it's a selector, and when you give a prompt to ChatGPT, if you are in ChatGPT-5, it's deciding if it should give you thinking mode or pro mode or standard mode based on the type of question that you asked. GPT-4o won't do that. It's going to default to the faster answer, and that might give you a more consistent response if you're having issues creating your custom GPT.
And then finally, if you were to create a custom GPT that has a number of research documents uploaded, and you know every time that you are using this GPT that you want it to think deeply while it's reading this research and coming up with a strategy for your organization, then you could select from this dropdown GPT-5 PRO or GPT-5 Thinking.
You're then able to say what capabilities you want the custom GPT to have. Select here if you want it to search the web. If you want it to create a canvas, which is a separate document that you can copy out of ChatGPT, you might want it to be able to create an image or use Python to analyze data as part of its responses.
If you want any of those things, you just select it under capabilities here. We actually don't want this model to go crazy. We want it to be very concise. We only want it to do the task of answering questions about our travel and expense policy, and we wouldn't want the GPT to go on the internet to come up with a different idea of what that response should be.
Those are the steps of how you would recreate what we already are using at Brand USA.
I'm going to guide you now through the steps of creating a custom GPT from scratch. To start, navigate to Explore GPTs. These are the custom GPTs that I was using frequently at the time I took this screenshot, and there you will see Explore GPTs underneath. This is where you would see the rest of your chat history. So you select Explore GPTs and it's going to bring up a GPT store. Think of Apple's App Store, this is the app store for Custom GPTs. If you wanted to see what other individuals or companies have created as GPTs, you can shop around in this store and play with other people's inventions.
I have to confess, I have not found this to be terribly useful for myself. If I'm creating a GPT, it's because there's something very specific I want and I want to be able to control that. If you're new to this, I suggest you take a moment and just play around with what's available.
When you are ready to create your own, you select create. This will open up a blank version of the custom GPT builder.
You'll begin by spelling out the name and description fields. Those are only for your internal use or if you were to share this with other people. This is what will help them to find it. It will not affect how the GPT works. The most important component here is instructions. So the instructions where it says, what does the GPT do?
How does it behave? What should it avoid doing? That is like a forever prompt. It's something that the custom GPT will always view before answering any prompts in the chat window. You can use ChatGPT to write these instructions for you.
Now I'm going to walk you through what that might look like. Let's say we wanted to create a custom GPT that would create a first draft of a press release. Here I've uploaded several Brand USA press releases. Very simple. You don't have to overthink this. I want to use these press releases to create a prompt that could be used by GPT-4o to take information and format it to match the press release style of Brand USA.
Here we have the style guide and the text that I can paste directly into that prompt window in the custom GPT builder.
This is a longer view of the information that it gave me.
You copy that information and paste it into the instructions field. You'll see over on the right side of the screen that you are able to preview how the GPT works, because these are things you'll want to test. It can get things wrong. So as you are creating it, you have the opportunity to see how does it work.
Here you get a preview of what it looks like. This is a comms assistant for press release drafts, and here I have in the description field some instructions on how you would use this. You would input relevant information for your press release and receive a draft.
Then you have the opportunity to add knowledge. Knowledge could include examples of what good output looks like. That is always a pro tip for working with ChatGPT and other language models. Providing an example of what you consider to be a good output gives it guidance for then how to give you more of that good output.
It could also include standard operating procedures or research reports. If we were working on a strategy for a particular market, I might find it useful to upload research that gives background on that particular market so that when ChatGPT is answering the research questions or helping to build the strategy, it's not guessing, it's looking at this other information to inform the strategy. Then you can click the plus button and you can either upload a photo or you can use Dall-E to create an image for the custom GPT. That is purely to help you find it when you are scrolling through your custom GPTs.
Now I want to preview this custom GPT and make sure that it works the way that I want it to. Here we have the prompt that I gave it to test. I want to write a press release about celebrating the holidays in the United States. It's July. So this is a long lead press release that's designed to generate early interest in stories. And if you see a theme across the information that I'm giving you, I want you to call out that theme and then here, because this is illustrative, I just went on the internet and took a bunch of ideas of things that I saw from a quick Google search and pasted it in to see what it would do, and then here on the right, great. Here's a press release following your inputs and style rules.
Now, is this a good output? Guess what? I don't actually know because I do not write press releases. This is why you want somebody who is a subject matter expert at the work that you are trying to do to be the people that build these custom gpt because they are the ones who are writing these press releases every day. You want them to create the prompt, to test the model, to look at the outputs, and to be able to make that determination of, is this garbage or does this now give me a rough draft.
I can tweak the language. I can proofread and double check all of the information because these tools still are going to hallucinate. You want to make sure that names and that dates are correct and that it didn't invent something, but that may be a lot faster and a lot less mental strain than sitting down to a blank word document and starting from scratch.
And once you decide that yes, the tool is delivering the output that you want, you hit the create button and you have the opportunity to look at sharing options.
Here at Brand USA, we have a ChatGPT Team account. I can make this available to anybody at Brand USA to whom I have sent the link. I can make it available to everyone at Brand USA or if I wanted to share this publicly, I can share it publicly with anybody who has the link, or I can make it available to use on the GPT store that I referenced earlier.
This is what the final product looks like. You have the image that I created with Dall-E, the name of the custom GPT. Quick description that shows people how they're meant to use it. Down here, you are able to put in your prompt in order to generate the output that you are looking for.
Now I'm going to talk through just a few more ideas of things that you can do with custom GPTs.
I imagine that many of you are familiar with meeting notetakers. You'll see Otter AI or fireflies.ai join a meeting and ask for permission. We know that in the tools used by many companies, whether it's Zoom or Google meets, you have the opportunity to click a button and have a meeting recorded.
There are a number of tools that do not get consent before recording a meeting, so I implore you, if you are using one of those tools, you should still disclose to the people on the call that you are recording the meeting. And you should assume that every Zoom call or every video meeting you are on, that there is a chance somebody could be recording you. If you have a Mac and you have the ChatGPT app, you are able to hit a record button on that app that automatically records the entire meeting, creates a transcript that is then saved inside of ChatGPT.
It automatically generates a meeting summary, and then you are able to have a conversation with that meeting summary. It's not always easy to go to that tool and pull up the actual transcript itself, but you are able to have that conversation and if you have persistent memory turned on, then ChatGPT is always going to know and understand everything that was discussed in that call and be able to reference it, either in other chats and other conversations. Sometimes that is incredibly useful. Other times that is incredibly invasive. And nothing happens on anyone's screen if somebody hits that record button.
There is an app called Granola that is a very popular meeting note taker, and there is no disclosure when it's used.
For this particular workflow, please get consent before recording a call, but then record it. I am not anti rerecording when it is used correctly and for the right use cases. Let's say you were a salesperson either on the leisure or the business side coming back from IMEX or IPW, and you want to have a way to expedite your follow up from that event.
If you are doing that initial onboarding call, or if you are in a live meeting with somebody and you set your phone down on the table and say, I'd like to record this . Make sure that during that conversation you are asking the same questions that you would if you were taking handwritten notes, and then when the meeting is over, you can export that transcript and then that transcript becomes very valuable in terms of things you can do with it.
So the first idea here is this "CRM" GPT. You could create a custom GPT that is designed to read through a transcript and let's say you want to take this new lead for a possible meeting that could be hosted in your destination and you want to take this information and put it in this Simpleview.
Right now there is no automatic way to do that. I'm sure with Zapier and other tools, there would be ways to build that, but there's nothing that's inherent in the Simpleview software today. That still doesn't mean that you are stuck taking all of the details about this meeting and retyping it into the correct fields in Simpleview.
You could say at the end of this call, please review the meeting transcript. And these are the 20 pieces of information that I want you to pull out. And if there's a question that didn't get addressed during the call, please don't invent something, say, I don't know, so that I can then in the follow up, get the rest of the information that I need.
That would then give you whatever format you asked it for, if it's a bulleted list, if that's easy. A bulleted list of name of the meeting and room nights on peak and how many attendees, and copy and paste that information directly in Simpleview without needing to read your handwritten notes later.
Let's say you were running a convention sales team and you have some junior staff members that you are training up. One way to do that might be to join them on their calls. It's difficult to find the time to do that with every single call that someone has, so this is an opportunity to create a coach.
As an example, when I was with New York City Tourism, we had a five borough mandate, so we wanted to make sure that we were talking about the full breadth of opportunities in New York City and not just things happening in Midtown Manhattan. You could create a coaching GPT where a junior staff member can paste in the transcript of their call, and then this GPT is designed to give them constructive feedback on what they can do on their next call to improve something.
One of those tips might be make sure that this junior team member has mentioned at least two boroughs during the phone call, and it could come back and say, that was a great call. Perhaps you were a little bit rushed through these sections. You could speak about this location more confidently. And also next time, please make sure that you include Brooklyn or Queens when you're talking about New York City. So that's a way to level up people's skills without investing hours and hours of time in that process.
Finally, email follow up. I know when I did sales a billion years ago, at the start of my career, a lot of the follow up from a trade show just started with a template that I would paste into an email and change out the relevant information.
That's not very different than being able to use a custom GPT that in your own friendly voice restates the information that you shared in the meeting suggests ideas for how can you continue the sales conversation. And then gives you a draft that you can go in and edit. You still want to keep the human in the loop.
You want to make sure that it didn't invent any details, but it's an opportunity to do something a little bit more quickly for a task that might already be, if we want to be honest about it, a little bit rote.
I'm going to conclude by walking through a list of thought starters for more custom GPTs that you can make to help you with your work, or GPTs that could be usable across your organization. So I hope as you're reading through these, that if you get ideas for other ones that would be incredibly useful.
Don't forget, you can use ChatGPT to come up with these types of ideas.
Let's say a new policy document came from your city council that you need to understand and then to explain in a more simple way to stakeholders regarding tourism in your destination. You can make a policy summarizer to do that.
You also see here for all of these examples, I've given them a name that sounds like a role that a human would play, to give you the idea that a custom GPT can be an assistant to you in pieces of the work that you do.
Content repurposer. We're recording this webinar. We'll be posting it online. Once the download is finished, I could take that content and come up with a transcript for it. Plug this into ChatGPT and say, turn this into a LinkedIn post. Turn this into a TikTok format. Give me three ideas of other information that I should share from this content.
A crisis simulator. I bet many of your organizations have a crisis plan. You can upload that crisis plan into a custom GPT and then have it create different scenarios for you that then you as a team could work through. What is the correct response to this particular crisis? What is the chain of command when it comes to responding to the media on these particular types of questions? So for a staff training purpose for crisis, that could be very helpful.
A staff onboarding assistant. There's a number of different documents, or every time someone starts a new job, in that first week, you can get overwhelmed with all of the paperwork you need to do and things for health insurance. Now I have to set up my retirement plan. You can take that information and you of course still want to share it in the traditional ways . You probably have videos that people need to watch, and this information lives in a intranet site or in PDF files. Another way that can live is in custom GPTs, so that if somebody has a question about their health policy at 3:00 AM they don't necessarily have to wake up the HR team that there is another resource to get answers to their questions.
A board minute summarizer. That's probably one of the least enjoyable things you can do, right? If you work at A DMO is sit and transform a board transcript into board minutes, you can create a custom GPT to assist with that. Same thing with an event recap generator. If I wanted to give a report to our C-suite on everything that was discussed on this webinar today, I could drop the transcript into a custom GPT that was built specifically to provide an executive summary of everything that was discussed.
Speech drafter, the same thing. I would build that the same way that we walked through creating the press release writer. Just take examples of other speeches that this person has given and it will help you adapt to that person's particular speaking style. This is something that I do for my own speeches because like everybody, I don't want to start with a blank page when I'm writing something.
So to have something that will help me get thoughts flowing is very helpful. Let's say you're a nonprofit and you want help filling out grant paperwork. You could build a custom GPT to assist with that project.
Email writer. I am not necessarily a huge fan of using ChatGPT to write things for you, but sometimes I will get hung up over getting back to people with the request. All of us have things that hang us up a little bit. You can create a custom GPT that will create the first draft of that email response so that you have something to respond to. It makes me move a little bit faster and for me, that is invaluable in my workflow.
Anna has asked are there any laws that stipulate you have to announce a recording, curious if the laws have caught up to AI and the laws are all over the map. There's no federal regulations around it and there are many states, and New York is one of them, where you do not legally have to disclose that something is being recorded. I'll also share a cautionary tale that I read on LinkedIn a few months ago of some VCs who were on a pitch call, and the funders left the pitch call.
And there was an otter.ai recording being made. The founders of the company that were doing the pitch stayed on the call for another two hours discussing all of the confidential background of their business. Many of those meeting note takers automatically send the transcript to every person that was on the call. Read.ai is another note taker and it is particularly bad about that, and so you want to make sure that you are being very protective if you are using note takers or if you think other people might be using note takers on a call.
Do we have a recommended platform for recording meetings at a trade show? There can be a lot of extraneous noises. The wifi might not be strong. I have reservations about both otters and fireflies because both of those tools, much like Read.ai, will try to contact every single email address that attended that meeting and send a transcript to them as a way of growing their user base. That said, I know that other DMOs have had success using both of those tools to record meetings.
And I know specifically otters being tested at IPW and they were concerned about all of the background noise and they said the result was absolutely great. All they did was set a phone that was recording in the table in between the speakers. If you're not having it join meetings, you're just using it as a recording tool, I think Otter and fireflies would be good for that. There's also a number of tools like Plaud.ai, short for applaud, or friend.ai is a new tool that is a wearable device that records every single thing that you and anyone says to you throughout the day. That stuff in terms of privacy tech, terrifies me. But again, done correctly, those tools do exist and can be very useful.
Jason says that his app and the desktop versions of ChatGPT don't have many of the deeper links I shared.
I should have said this at the beginning of the call, and that is a great note and shame on me, Jason. These are available only to paid users at this point. But I will say please pay for your ChatGPT account. That allows you to turn off training on the tool so everything that you put into ChatGPT doesn't get sucked into training data for future versions of AI.
It also unlocks more access to the better, smarter models, which really shows you what the capabilities of these tools are. I strongly encourage you to use paid versions of any AI tool.
What is the practical difference between a custom GPT and a ChatGPT project with custom instructions? It is tricky because there is a great deal of overlap. If you're not familiar with projects inside of ChatGPT, I think that is also a very useful tool. It's much like a folder that you can use to organize prompts all around one subject and inside a ChatGPT project. Just like with a custom GPT, you can upload knowledge and just like with a custom GPT, you can give it custom instructions rather than specifically instructions for how to answer each question. I would say the biggest practical difference is you can share custom GPTs across your organization and you can't share you can't share a project across your organization.
It's that sharing that makes it different. If you use the custom GPT 20 times, you would have to scroll through all of your chats in order to find each one of those 20 chats. For something like our travel policy, who cares, like that's fine with me because I don't need to access those old chats, but I might want to use something in a project if I want to keep every single conversation, every single chat thread in one place, because then I can just click on the project and then I can scroll through.`,
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
    transcript: `My name is Janette Roush. I am the SVP of Innovation and Chief AI Officer for Brand USA, and today we are going to talk about AI for convention sales. So as a quick reminder of my role here at Brand USA, I am looking at how we can transform the promotion of business events across the United States using AI through three tranches of work. The first is operational excellence and how can we upskill what we are doing internally with the assistance of AI. The second piece, that's what this webinar is right now, industry empowerment. How are we able to increase the capacity of the US tourism industry to do this work?

And then the third piece is planner and delegate experience enhancement. How can we use AI to improve the discoverability and book- ability of the United States? Later in the presentation, I'm going to be joined by Gabe from Visit Orlando's technology team and he is going to walk through an app that he has vibe coded for Visit Orlando's team. So I'm excited to see that as well.

One of the most useful tools when it comes to convention sales teams and how you can adopt AI not just for individual use cases, but across your department, is by building custom gpt for your team.

A custom GPT is a reusable prompt that inside of ChatGPT, it's one set of instructions with a set of files that have already been saved, and it allows you to use that prompt over and over again. So this is an example of a custom GPT that we use here at Brand USA, and it is for our travel and expense policy.

Here in the backend, I have uploaded our 40 plus page PDF file with our expense policy in it. And then you are able to log in and ask questions like what is my per diem in Tokyo?

I have instructed it to look at sources in order to answer the question, what is the per diem in Tokyo? And here we see that we have the hotel, the meal, and the incidental per diem spelled out. And then what makes Custom GPTs particularly useful and interesting is that you can continue to have a conversation so you can clarify things that you don't understand about the answer.

So here now I can dive in a little deeper and ask about booking the business class seats from New York City to Tokyo. So why would we want to use the same prompt more than one time? There's three uses for that. The first is that it saves time. You don't have to retype the prompt every single time.

I don't have to upload that PDF file every single time I want to ask a question of it. It's already uploaded. It's already saved, and all of the custom gpt are stored in one place on your ChatGPT account, so you don't have to do a search for that old chat that you would had going if that's the way you're currently doing this work.

The second piece is that this ensures consistency, particularly across a team. It makes sure that everybody is getting the same answers in the same format, and because of that. It can help to control quality. Again, there's going to be one consistent prompt that everybody is using, which creates one consistent output.

Let's look what it would take to create a new custom GPT for a convention sales team. Start by navigating to explore GPTs, so you will want to have a paid version of ChatGPT to really dig into using these tools. I believe there's some limited access in the free accounts, but in order to create, to share them across a department, you want to have a paid team or enterprise account.

And you'll see here on the left rail, there's the Explore GPTs button. Then when you open that up, you're going to get, you can see what looks like the GPT store, which is Open AI's version of the Apple's app store, essentially. And you'll see on the top right hand corner there is a button that allows you to create a new GPT.

And then when you click on it, you get this screen to get started, you are going to type in something for the name and the description. Now that information doesn't change how the GPT works, that is just for your own reference. To find the GPT, again, the most important component is here in the middle. It is the instructions.

And the instructions are just another name for a prompt. And so it is something that every time you use this custom GPT, it is going to refer back to this prompt in order to. Find out what it should do with your request. Now, a great way to use this is actually have ChatGPT write that prompt for you. So the example that I am going to show is making a workflow for taking notes, a transcript of a sales call that you have, and then from that sales call, pulling out all of the bullet points that you would then need to paste into your CRM tool, whether that is Simpleview, Salesforce, or another tool. Here I'm explaining to ChatGPT what I want to have, and then it's responding by giving me a prompt, and you'll see the prompt is written in a code called JSON.

When a prompt is written in JSON, it makes it easier for ChatGPT to provide a consistent response because it is following the code.

Even if you don't read code, you can tell these are all of the things that it is looking for in the transcript of your conversation in order to pull out a bullet list for you of that important information. You just copy that from ChatGPT. Go back into the custom GPT that you're building and you paste the instructions into the instructions field.

You then have the opportunity to upload knowledge. So in the case of Brand USA's GPT for our travel and expense policy, I've uploaded our travel and expense policy. So you may not need to upload any files for something like a CRM note taker, but you might want to, if you have examples of good output, what you consider a positive output to look like, you could upload that. If you were creating a reusable prompt in order to look at research, you could then upload that research here and it could review that every time you asked a question about a particular market segment where you have research about that market uploaded into a custom GPT.

And then as you're getting closer to finishing the custom GPT, you can do things like add in a logo or image in order to make it easier for you to find that tool inside of your toolbar. There will just be a plus sign and you can select that plus sign in order to upload an image or have ChatGPT create that image for you.

Then inside of that page, you have the opportunity to preview the custom GPT to see how it works. So here I actually had ChatGPT make a fake transcript of a phone call, and then I uploaded it to this custom GPT to see what the output looks like. What I particularly liked about this custom GPT is that I'm doing a completion check at the end, and it's telling me that some of the data is missing and then you are able to look up and for the question, what prior destinations has this event been held in?

We see that it says unknown, so we know that the next time that we have a call with this person, we may want to clarify whether or not they've held this event in previous destinations and what those destinations were, and then you're going to hit the create button. It's then going to give you options for whether or not you would like to share this GPT. So here I can keep it so that it's just for my own personal use. I can make it invite only and I can get a link where I can share that with other people. I can type in the names of people in the Brand USA workspace and select names from a list in order to share it across with specific people in my company or.

I can make it so that anybody at Brand USA can see this. And in that way, when they go to their version of the GPT store, there's a section at the top with all of the GPTs that are available to the entire company. Then finally you have the option to share it outside of your organization. So if I wanted to create a GPT on how to make custom gpt, I could share that link or that QR code here in the webinar, and then anybody who has that link would be able to use it or we can make it public, and then it goes into that public GPT exchange.

And then the final product, when you open it up inside of your ChatGPT account, this is what it's going to look like.

So what are other examples of custom gpt that you could make? If we wanted to focus just on follow up from meetings, let's imagine you are recording your meetings at IMEX by downloading a transcription or a meeting note taker tool onto your phone. You would want to get permission for recording that meeting, right? Getting consent, whether it is for a recording over Zoom, Microsoft Teams or in person.

There are many meeting note taking tools, some of which you will see join your meeting as a participant. There are other meeting note taking tools that do not join your meeting visibly, but still may be recording your meeting and making a transcription. So it is important to know while you understand, you could be recorded at any time, don't be that person doing that and get consent before you record the call. Once you do, make sure that during the call, you are asking the same key questions that you always would during that initial sales call. So whether it is in person, whether it is over zoom, if you need to know the number of room nights on peak and prior destinations for the meeting has been held, just make sure that you go through all of the questions that you would need to ask, and then you have the opportunity to export that transcript and then put it into a custom GPT.

So we already walked through the idea of making a custom GPT that would work with your CRM tool. So to take all of the information that you might have scribbled on to a note, or you might have you might need to read the entire transcript in order to find all of those individual details. Now it can pull it out for you in one spot.

You could use that same transcript, but create a different custom GPT that is a sales coach. So in my time at New York City Tourism and Conventions, we had a five borough mandate. If a member of the team was talking about New York City as a meeting destination, ideally they aren't just talking about Manhattan, they're talking about the four other boroughs in New York City as well.

If you wanted to spend more time training up junior staff, but you don't always have the bandwidth to listen in on every one of their calls, you could create a custom GPT where the prompt is, review this sales call and then give helpful suggestions on what the sales person could do differently on their next call.

That might be a more comfortable way for somebody to do training where they don't feel like it's another person watching over them. And then you could program into the prompt, make sure that the person on the call is abiding by the five borough mandate and is offering at least one borough in addition to the borough of Manhattan for the meeting destination.

And then finally, of course, it's the email follow up and we know that emails can get a little rote, so the idea isn't to have ChatGPT completely do your email follow up for you, but it's very rare if you're coming back from a conference that you're going to sit down with a blank email every single time that you have to write that follow up.

You're typically starting from some kind of template, and then you are adjusting that template so you can take a little pressure off of yourself. Have ChatGPT, it understands what you consider a good sales follow up to be. Give examples of those good emails to ChatGPT, and then say, please write some guidance so that a future large language model can replicate this style when it's shown a transcript of a call.

And then that will get you faster to the first draft, so that then all you need to do is worry about editing that draft. So how would that process work specifically? I'd say start by choosing five strong post-call emails. The more examples you have, the better. You're then going to go to ChatGPT and create a custom GPT, and then when you're filling in the name and instructions.

Typically, when I am naming a custom GPT, I like to give it a name. Describes the task that it does. So you are, convention sales follow up assistant and that is its job. The only thing it does is assist you in following up on sales conversations. So say, you're a follow-up assistant for A DMO. You help write post-call follow-up emails based on a transcript, match the sales rep's tone and writing style from the examples provided.

Focus on being professional, warm, concise, and helpful. Emphasize next steps and destination benefits relevant to the planner's needs. A really great, straightforward, clear prompt, just telling ChatGPT what do you want it to do every single time somebody pastes in a call transcript, you can then upload your email samples, the files, you can paste them all into one word document if you'd like. Test it with a call transcript to make sure that you are getting the output you are hoping for, and then you can publish that custom GPT.

Now I'd like to talk about how you can use any of the AI tools, which could include Anthropic's Claude or Google's Gemini with a product that they call deep research. It is embedded in all three of the frontier language models and deep research is like giving an assistant 30 minutes to go out and just deeply query a question that you have, and then to take all of this information that the assistant finds on the internet and write a McKinsey style report for you about that information.

I think that this is particularly powerful when it comes to creating a competitive analysis. I wanted to understand what is Brand USA's place amongst 30 national tourism organizations when it comes to the global business event market. So I want to understand for places like Business Events Australia, what is their unique selling proposition and their brand promise?

Do they have a tagline? Can we uncover somewhere hidden in files on the internet information about how much they spend a year on? On meetings and advertising to that market segment, do they offer any incentives to planners who book events in their destination? So this is something that if I were to do it across 30 different organizations, it would take me days.

Here, it will do something similar in about 30 minutes. You have to know that they hallucinate, they will make things up. But in that report, you'll be given links so that you can actually click through to the sources and read those sources yourself to see if you agree with the outcome that ChatGPT gave you in this research report.

If you are looking to see what your competitive set is doing, it is a very powerful tool. It would also be excellent for doing things like researching more deeply on a particular market segment that you were looking to attract to your destination or to learn about trends in the meeting space. If you were looking more at incentives from a particular market, you could get up to date really in-depth, detailed information by giving a powerful prompt to one of these deep research tools.

Now I'm going to walk through a slightly more complex example, which is using agents for lead research. And the example that I'm going to show you today is completely free to access it is from a website that is called agent.ai, and it was created by one of the co-founders of HubSpot.

If you use HubSpot, they have a lot of integrations between agent.ai and the HubSpot ecosystem, and one of the really helpful things they have is access to the API for LinkedIn. So it means you can query LinkedIn and if the people you are querying have open profiles on LinkedIn, you can learn things about them without needing to be inside of LinkedIn and navigating to their profile page.

So I went to agent.ai to make an agent that provides insights on business event planners for DMOs. And here I've written a description of exactly what I want it to do. I want it to deliver actionable sales intelligence based on identifying the key selling points, decision making patterns, and how I could personalize an approach to reach out to this planner based on their professional history.

And it's going to do that by reading the LinkedIn posts that were made by the planner, and then taking those posts and putting them inside a prompt so that a large language model is analyzing the posts and then coming up with an output. The deep research example that I just showed you, that is also an example of agentic AI.

You don't have to move your computer mouse to click on all of the websites that it's researching. You give it a task and it goes out and completes the task on your behalf. So this is a slightly different type of agent where I've spelled out a workflow, and then AI helps the steps in the workflow to move forward.

When you log in and you say, I want to create a new agent, this is what the first landing page will look like. You begin by giving a description that's public of how you say this agent will work. Then here is where you spell out the steps. This agent is very simple. It only has five steps.

And then over here on the right side, this is where you can test the agent to see if it works the way that you want it to. And so the five steps are that you want to get input from the user. So that's this section right here. If I'm the user, this needs input, in this case, the URL of the planner on LinkedIn in order to move to the second step.

The second step is that it's going to go to that URL's LinkedIn profile and save it. It's then going to get the last 25 posts on LinkedIn for that URL, and it is going to save it in a file called LinkedIn posts. So then we're going to invoke GPT-4 .5 in this example, and it's going to review all of that data from LinkedIn, and then it is going to provide a summary, and then it's going to show us that summary in markdown format, so it's easy to read.

So what does this look like? This is creating step number one, getting user input. The input type is text. You're going to, this is what we're asking for, the LinkedIn URL of the business event planner. You can provide examples so that the user of the agent can see what they're meant to do, and then you give that variable, that output and name.

Here, i'm LinkedIn URL. And then let's move forward to the piece where we are using generative AI in this tool. This is just a prompt. I'm providing you with a LinkedIn profile and posts of a business event planner. Please provide a detailed summary of what interests them, what destinations they write about, if any, what a good sales approach could be for them, and then give me a bulleted list that would include key selling points, decision making patterns, and personalized approaches based on that planner's professional history.

Conclude the output with one surprising insight about the planner. And then here I'm telling it what to look at. I want it to look at the data from this person's profile and the post output, the list of their last 25 posts, and then it's going to return that as out summary or output summary. Then this is the output summary rendered in markdown format.

You could see this is six and seven of many different insights that we got from this business event planner, but we now understand some of their key selling points, things that would be interesting to this person as you were conducting a sales pitch with them, and we understand like the surprising insight that this person isn't just a business event planner, he's also a thought leader and an advisor.

He's really on the forefront of this work. All of this, if you are in the midst of the pitching process to host a special meeting in your destination or in your venue, this is very helpful information to have, and it's something you could get by yourself from LinkedIn, but it would take a long time. They don't make it easy in LinkedIn to find the last 25, 50, or 100 LinkedIn posts that someone wrote.

So this makes it much simpler to do that work. And then if you wanted to make this even more agentic, you could set it up on the backend so that it's connected to your Outlook calendar so it knows who you have meetings with, and then could run this script automatically and send you an email every morning with this information.

That's a little more complicated to pull off, but it's something that's entirely possible using today's technology. And so now, this is my opportunity to turn it over to Gabe because I am very excited to hear what he has been vibe coding with Visit Orlando. Gabe, do you want to jump on? Sure. Thanks Janette.

All right. Hello everyone. My name is Gabriel Itajahy. I am the manager of Enterprise Applications at Visit Orlando. I've been here a little bit over 10 years now, and I primarily oversee all of our CMS and CRM integrations. We are Simpleview clients. But today I'm going to be talking a little bit about vibe coding and what the next evolution is in my opinion with AI.

Vibe coding lets you turn some ideas, some brainstorming into quick applications. And I'm going to be demoing something I built for our convention sales team. It's still a prototype. I'm going to be doing a live demo of something we've we're doing with our convention maps.

I did a quick deck for vibe coding, just to give an overview of what it is, and then we'll head over to the demo. Vibe coding essentially is turning plain English into code. So similar to ChatGPT and copilot, you can type something in an idea. Vibe coding turns that into a real application, a website, a platform, a database, a backend, whatever you want, just chatting into a prompt based system. Here on the right hand side, you'll see what that workflow looks like. So number one, you're going to describe what you want. In this example, I need a login form. The AI then generates what you put in and spits out, again, a real application that can be used real time.

Number three talks about refinement. So this is where you go back and forth with vibe coding, changing colors, changing workflows, changing things you don't like, adding things to a form in this example. And then finally, when all that is done, you can implement it and turn something live through the use of vibe, coding and some of these platforms, which I'll show you in a second.

It allows for rapid prototyping. Something that could have taken weeks, months, years to build, can now take hours or days. The fun part is, again, I am on the tech team, but I'm not a developer. Everyone can contribute. Designers can contribute. Business leaders can contribute. CMS users, CRM users, they can go in and build a prototype using vibe coding.

And this has caused a big shift with developers. Developers obviously still code, but now they're leveraging and using Vibe coding to start their process, and now they're looking at QA and security of the code that's output. And just to highlight what we just talked about on the previous slide, the collaboration is big.

It allows people from different departments to participate directly. You're seeing vibe coding and all of these development tools including GitHub, co-pilot, ChatGPTs, and other integrated development environments, and back to the developer roles, it's starting to shift from sitting down and writing code all day to reviewing what the AI has produced.

The big key with vibe coating is the prompt. The prompt is key, is probably the most important thing that you need when vibe coating. Good prompts are clear, specific and outcome oriented. Bad prompts can lead to messy results. Here is a very basic example of a vague prompt, make me a website.

That's not really useful. A clear one would be code a one page site that includes a header and more specifics. And the example I'm going to show you, our prompt was like four pages long and we spent probably more time in the prompt than in the vibe coding tool itself. Here's some examples of vibe coding in action.

We are in the middle of implementing an AI tool on our website, and I wanted to create a quick Gantt chart to highlight the timeline, and I went into Vibe code. We're using a tool called Replit. I told them what we needed. I need a Gantt chart where I can modify the dates, puts out the dates and the nice timeline and something I can quickly share.

We also created a convention map tool. What we've learned in the vibe coding process over the last few months, the benefits are great for proofs of concept, internal tools, fast iteration. It helps bridge those visual, those ideas, and allows business leaders to visualize something. Whether it's a prototype, mockups, a quick app, you can build something quick to show your leaders or stakeholders, and it allows to increase collaboration. Now, it's not always perfect. Sometimes you can get caught in this vibe coding loop and end up spending more time than if you were to just go buy a product or have a developer work on it.

We've experienced that in the past with a few other ideas our team tried to implement. You also don't want to reinvent the wheel if there's a tool out there. Then use that tool, they've probably spent a lot of time perfecting that tool. And there's no need to recreate something that already exists, and you still do need some expertise.

Now, if you're building a simple one-page website by holding, anyone can do it. If you're building something more complex with a backend with databases, integration with different platforms, you're still going to need that technical expertise, whether it's a developer, a technical project manager, or a tech leader.

So things to keep in mind with vibe coding. Alright, now I'm going to show you what we built.

As part of our convention sales team, we work with meeting planners to bring conferences and conventions to Orlando. One of the tools we offer, it's something in Simpleview CMS, it's our map publishing tool. And whenever we have a convention, we let them know, Hey, we have this tool and we can highlight hotels around the convention center, attractions, around the convention center, restaurants, whatever you like.

We can create a map, we can create a shareable URL. You can send out to your attendees, and this is an example of a convention map that created last week. Just showcasing you what it looks like using the map publishing tool from Simpleview. Tool works great. It's easy to use. It pulls live listings from our CRM and we use this probably 80% of the time with our clients.

Everyone's happy and even generates a downloadable PDF that our meeting planners like to add to a brochure or directly in an email. Now, every now and then we want to highlight our International Drive district. So if you're unfamiliar with Orlando, our I Drive district is our tourist district right outside of Disney, Universal, and SeaWorld. I Drive is where all the action happens.

We've developed a custom map, and this is outdated. We're actually working on a new one now of our I Drive district. Sometimes meeting planners want to use this custom map and then plot hotels on this map directly, we can do that, but this is a manual process, so every time a special request comes in, our creative services team will get all of the hotels needed to plot on the map, and they'll manually, I think, using Photoshop, they'll manually plot these points and manually add all of these hotels.

We don't do it often, maybe less than 50 a year, but every time we need to do it, it's a very time consuming process. Again, this one alone has 18 points of interest. I've seen maps that have over 40, over 50. I think we calculated it takes about an hour and a half to make one of these manually.

So again, one and a half hours times 50 a year it starts to add up. So my team and I, we were really looking into vibe coding. We're like, where's, what's a solution? Where's the problem that we can actually solve using vibe coding? And then this came up and we said, all right, let's figure it out. Let's solve it.

And we built a, we call it MAP Con, a convention mapping tool using vibe coding. Now quickly create a map so you can see what it does. Okay, so here I'm going to create a new map. And then again, this is where you'll put your conference information, you'll put in the dates.

My conference will be next year. The location, all the information we collect already. An event logo. I created a logo earlier and now here's where you're going to select the base map. So this is a concept we're testing with. The one I'm going to use is the I Drive sample map, which is what you saw in our example here.

But we're going to be able to add multiple base maps. So if in the future if we build more than one I Drive district map or a Disney Map or Sea World Map, we can select it from this select base map option.

Now, once you select your base map, again, I'm going to use the I Drive example I'm going to create sections. Sections are these areas here that we created using the map publishing tool. So the first section I'll call hotels near West Concourse, and then I'll add the points of interest that are there. Let me see here.

Rosen.

All right, and then I see we also have another Section SeaWorld and I Drive, so I'll go up here, add a new section, SeaWorld, and I Drive. I'll add a point of interest under it and DoubleTree, and then I'll add our last section, and for this one I won't put everything. So I Drive and Convention Center and Castle Hotel.

I'll just add one. So now I've picked my points and you'll see my new map has been generated, grabbing those points of interest and plotting them on the map. Again, this is still in prototype phase. We have some design issues to get through and we're going to use a new map over here in the next few weeks, but what took an hour and a half before just took me maybe less than five minutes, maybe 10 minutes tops, and I just generated a new map. Now, from here, I'll click Create Map to officially create it, and you'll see it here. Now in the backend, I've created a new map. I can create a public URL that I can share.

It looks like this. And there is also a way to download the PDF and it creates this. So we went from where's the other one? From here to here in about five minutes. And that was the goal to make our creative services team time more efficient, more effective. So probably by January, they're going to be using this tool primarily to handle those one-off requests.

Now, you might be asking, how did this tool know to plot those points for those specific areas? That's all done in the backend, in the admin console. So here's your front end. If I click on admin, this is where the magic happens. Under base maps you can upload any new map, any document that you want to plot points against.

Again, here are our four examples. Now this is the interesting part, and this is where we do some manual work, but it's just a one-time thing. And let me show you what that looks like. For every point of interest we have to manually plot it just one time, 'cause without that, there's no way of the system knowing how to apply a plot to a map because it's not to scale, so you can't really use the lat and long that's provided by our CRM or by Google.

So what I'm going to do now is input a POI and Janette's ice cream shop. We added categories and this is a restaurant and we create the POI. Now that POI is set up, it's in the backend here. You can search for it. I actually use Janette for a few other examples here. There's Janette's Ice Cream Shop.

Now, once you set up a POI, you have to go back into your base map and plot that POI to the map.

So here I'm going to get the ice cream shop and plot it somewhere on the map. So let's put it right by Universal. That way it's easy to see. All right. Again, this was the one-time thing. Moving forward, the system's always going to know that the ice cream shop for this space map gets plotted next to Universal.

I'm going to go ahead and save changes.

Okay, now I'm going to go back to the map I created and I'm going to add it here. Now, I might have to refresh a few times, so making sure it's saved here. Okay. There it is.

All right. There it is. I'll go ahead and save it. And now you'll see up here the ice cream shop was applied, if you have hundreds of POIs, that for initial setup could take some time. But you saw that after that initial setup, creating maps, again, we're talking minutes, not hours or days. And all of this was done using a tool called Replit, and this is what it looks like in the backend.

So Replit, you have a normal ChatGPT style prompt on the left hand side. As you prompt it, it generates an app on the right hand side, and I will do a quick demo of what that looks like. So again, this is Replit. There's some other ones out there. Lovable is a popular one. There's some, Claude has one.

But I really liked and enjoyed using Replit. I am going to grab that example from the deck here.

So essentially you just come in here, put in your idea.

And then you start the chat and builds it for you. Unfortunately I might not be able to show you 'cause it does take five to eight minutes, but essentially you just put that in here and Replit and vibe coding will do its thing. And then again, from there you just, it's a lot of back and forth trying to fix things and get things right.

Replit is a cool tool because it allows you to deploy apps without any other backend configuration. Oh, you'll see here, it tells you how long some of these things take. Replit lets you deploy websites and apps using Replit tool itself. So you don't have to go to GitHub, to Azure to host your platform.

You could do it all within the app, which is what you're seeing here with my Map Con app. It's all hosted by the Replit app.

So Janette, I think I covered a lot there. I wanted to showcase everything we've been doing to help the convention sales team and our creative services team using AI to make their jobs their day-to-day a little bit more efficient.

I am so blown away by this tool. I think that this is a terrific example of how AI, it's not here to replace jobs.

I see this as an opportunity to expand what we can do, because how many additional maps are you going to be able to make now a year compared to what you did before? Probably 10 x at least. Yeah. So there, I'm sure a number of conventions that felt like they weren't important enough, or somebody didn't scream loudly enough to get the design team to make the map, right?

And now every single meeting can have their own custom map. Yeah. I brought up the developer piece a few times on purpose because there's been articles out there now saying that vibe coding can't do it all. We still need the developers and there's been organizations that are bringing developers back.

Basically the QA and analyze vibe coding. So yeah, it's not replacing anybody, but it's here to stay and we just have to leverage it and use it correctly. Yeah, I absolutely agree. I'm going to quickly share an app that I vibe coded, and again, it's like, to your point about developers, I'm not trying to sell a SaaS subscription to this, but this is a website that I vibe coded for this webinar series because I wanted to have a space where you could watch all of the video content, and so you could see it was password protected.

You're able to click onto the video content. I haven't done this yet, but when it was vibe coding, it said you should probably have downloadable resources. So once I create the PDF files, they'll be downloadable. I uploaded all of these videos and we'll post this video onto this landing page once we're done editing it after the webinar.

I uploaded them into Google's Gemini, which is able to watch and understand videos, and I said, create chapter headings for me. So it found the timestamps and chapter headings, and then when you click on it, something else I think is very useful, it jumps ahead to that point in the webinar and I didn't tell it to do that initially.

Like it just started doing it because it knew that is something that is very useful inside of a content learning system. The ability of AI to make SaaS products available to us and to be perfectly customizable to us.

 I really appreciate you coming on, and now I am going use the last 10 minutes here to talk about incorporating AI into your workflow at your convention sales team. The way that I like to think about the workflow piece as opposed to the individual contributor piece is, look at the department and then double click on all of the roles that happen inside of that department. And it could be separate jobs, separate positions, but it it could be one person is managing sales operations and lead generation and market intelligence. But let's say we wanted to focus on just one of those roles to start, and we want to focus on sales operations because that's the piece that's not out talking to people, right? It's the backend, it's the part that you want to get out of the way so that we can do the real part of the job, which is communicating with the buyers. You could take the sales operations role and break it down into all of these individual touchpoint.

So what does that involve? CRM administration, forecasting, reporting. Go through then and determine what is one way that you can use AI for each element of this process. If you have your sales process written out, ask AI to suggest ways to simplify that workflow we already talked about for your CRM transforming transcripts into notes for forecasting.

Look at historical data and try to understand patterns in that data. That's something that AI is really good at. So knowing what are the little details that you may not have noticed. But ChatGPT or the AI tool of your choice sees that actually contributes to a closed deal. Again, reporting, having the opportunity to put a report into ChatGPT and say, break this down into the things I need to know from this report or on the other side to take information and turn it into a report to make your reporting process simpler so you're not wasting so much time describing what it is that you're doing. I really like tools like ChatGPT for a gap analysis. So what am I not thinking about that I should be thinking about or give me three ways to improve this proposal?

And then we talked about competitive intelligence using deep research tools as well.

To conclude today's webinar, I want to remind everyone that at work it is not cheating to use AI. You want to make sure that you're using it responsibly, that you are using paid secure tools for that work. But please don't think that by taking a shortcut that you aren't still doing your job. Remember, like when it comes to RFPs, your job isn't to write RFPs or to respond to RFPs. It's to do the work that the RFP is about, and that's communicating with the people and developing those relationships, and actually getting the meeting to be held in the United States and in your destination.

AI gives us more capacity to make that happen. I want to thank Gabe so much again. Thank you Visit Orlando for sharing Gabe with us for today. I learned a lot from that and I hope you did as well.`,
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
    transcript: `What makes AI work well is how much context or information you give it.

 The framework is called CRIT. Context, role, interview and task.  If you can provide all of these pieces of detail, you're going to get a much more interesting response than if you just type a few sentences into a prompt window,  using a voice-to-text tool to do this work.

Inside of the paid versions of ChatGPT, we have a dictate button.

The trick with using the dictate button is  the dictation always starts at the end of all of the prompts. There's a number of voice-to-text systems that one can use. I use a piece of software called Monologue because it's local to my computer, so it does not ever go into the cloud.

Another version that's very popular is called Wispr Flow.

  When we're using AI, we should talk to it because that is how you start giving enough information to AI to help it do its job.  We have HQ Week next week, and I am doing a Lunch and Learn, and I want the lunch and learn to be about building an artifact inside of Claude.

I am just going to talk to the AI and give it all the information it needs to help me come up with a plan. The first thing I'm going to do is up here in the model picker, I'm going to pick thinking, which means that it's going to think longer in order to give me a response.

It's going to think through many different possible answers, and then it's going to decide which is the best answer and give that answer to me.  That's why I like to use thinking mode for a more complicated task.  Now I'm going to hit the hot key to start my voice transcription. I'm going to say the context that I want you to help me with is that Brand USA is having an HQ Week next week I am the host of a lunch and learn where I would like us to use Claude.

In order to have each individual person create an artifact inside of Claude that is something that they can share between their department and would provide value to the company, would be simple to explain and simple to participate in, but would be something that's both fun. And really useful. I only have an hour for this workshop.

People will be eating lunch during the workshop, so there can't be too much typing involved in this project, and I want it to be enjoyable. There will be room for laptops. We'll have good wifi, but there won't be  tons of space to spread out. We'll be pretty packed in.

But you can see that I just started talking. Now all of those words are in ChatGPT, and I didn't have to type it all out and you could just say whatever pops into your head. AI will make sense of it so you don't have to do it perfectly.

AI will still understand it.

I have given some detailed background or context about the project I want help with.  So the next step, and again, I'm hitting shift return to enter to a new line here in the prompt, I'm going to assign AI a specific expert role.  So I've started recording and I'm going to say the specific expert role that I am giving to you is as me. Your expert role is you're the Chief AI Officer for Brand USA with a background in education, and you want to make this accessible to everybody on the team. You want it to be fun for experts and for beginners.

There we go.

Then this is a really important step. We want to prompt AI to ask us questions in order to get the best results. And so that's how it's going to pull more specific context from us in order to provide a more interesting answer. So I'm recording and I'm going to say, please ask me two additional questions, one at a time in order to really understand what I am trying to accomplish and to create the best possible workshop programming for this hour,

right?  And then this specific objective that I want.

I need help creating an outline for a one hour workshop for the Brand USA team. Everybody will be able to complete on their individual computers and will result in them having a working Claude artifact. That might help with some aspect of doing their job at Brand USA. But we don't have to boil the ocean all at once.

We can start by making a Pomodoro timer as a team, and then people can come up with ideas for what a Claude artifact could be. Most of the hours should focus on coming up with a good idea. That would be useful because making the actual artifact will be pretty fast.

Great. So now you can see that this is a pretty long prompt. It's longer than I would normally type in to ChatGPT or Claude for something like this. I'm going to hit enter. It's in thinking mode, so it's going to take a little bit of, oh, it's going to start with an asking the questions.  So who's in the room? It will be representatives across our entire 60 person company who's going to be in the room.

So it's going to include finance, partnerships, marketing, social media, analytics, research, technology, and legal.  There will be probably not a lot of access to data, so let's not have any external tools in this. Let's come up with examples that are self-contained and fairly simple, and now it's going to use my answer there to help inform what the second question is that it's going to ask me.

At the end of the hour, I want the Claude artifact to be a content brief generator, a mini Q&A bot, a reusable prompt template. All of those are really good ideas. I just want it to be something that will be useful to the individual who created the artifact and the success metric I care most about, honestly, it would be immediate adoption by somebody else in that person's department so that we can encourage working as a team using the same tools.

All of this stuff much longer than the prompts I normally type out, and we get to see how it's planning because it's in thinking mode.

 Now I have an output that I've now used ChatGPT for something that's a little more advanced than rewriting an email to sound more polite or using it like fancy Google. It's  creating this workshop outline for me, and we see what the goals are.  We know that everybody is going to have a laptop with Claude open.

I'll have a timer.  That's an instruction for me in the room. In 45 minutes, you're going to ship one Claude artifact that a teammate will adopt today. We want it to be explainable in 30 seconds, so we'll start by going through pain points. Then we're going to use that to come up with the idea for what the artifact will be.

And then at the end of it, we'll ask people to swap so that people are literally using one another's artifacts inside of the workshop. We have some idea starters so that is a good starting place. The entire idea behind this CRIT framework is that it forces you to give enough information to ChatGPT that it can give you a good response back.

I'll share my screen because this is another example of adding context.

We're downloading this briefing document, and now I'm going to add it as context here.  I want to help our Brazilian rep firm come up with a really great interesting idea to engage the travel trade in Brazil with our new campaign America The Beautiful.

 I'm going to assume this would need to be low budget, let's say no more than a thousand dollars.  Think about the ideas rather than the execution at this point. If we wanted to bring America the Beautiful to life for the Brazilian travel trade at a local trade event, what kind of activation could we do in a Brand USA booth that would be taking advantage of all of the opportunities of America the Beautiful?

We want to assign it an expert role. Your role is as a marketing director who specializes in international tourism and is an expert on the United States, and you have deep relationships with the travel trade in Brazil, and you want to make sure that everybody is making the United States  their number one destination for their customers in 2026 and beyond based on this campaign.

 Honestly, this should be enough, even if it doesn't go and ask questions. This is already a longer prompt than a lot of people ever put into ChatGPT, because we used the voice tool so that we were able to deliver a lot of context to the tool.  Loaded this briefing document so it is pulling from real information about this campaign to make sure that everything it suggests is grounded in our brand.

 We already have localized Portuguese videos, carousels, banners, and toolkit guidance to lean on.  We want to put all the spend into simple high impact engagement and lead capture.

Okay, so we could have Passport to the Beautiful. Each pillar is a 30-second pitch and a QR code that leads you to a Google form that has downloadable open sell sheets and social assets.  You get a small drawing prize or priority access to a webinar.

I think they overestimate how excited people are to watch a webinar.

Reels in a Box. Set up a recording station and ask the agents to create social posts for us.

The Route Builder.  Magnetic map of the United States with magnet tiles tied to the demand drivers that Brazilians love.  Football, food. Look at my Portuguese. It's pretty good.  It says shopping parks, snow, soccer, wine, astronomy,  road trips, routes, car route, road trips.

That's fun. You assemble a seven day itinerary in 60 seconds. Snap a photo and it says, text them a polished PDF version by a QR code after the show. I bet you could use AI I That could be a Claude artifact,  turn this picture of magnets on a map into an itinerary.

 This went very deep and it didn't even do the prompt correctly because I hit enter too soon.  This illustrates how the more context, the more information you give to ChatGPT, the better the results are.

 If I wanted to dig in deeper, because none of these tools are meant to be one shot, if I wanted to say, can you help me design an AI integration that, I am already forgetting that I have the text  tool, because that's one of those things you have to train to remember to use.  Can you help me design an AI integration  that would connect a photo that I take of this map with the magnet tiles on it sends it using Zapier or another tool to ChatGPT, which reads the picture and writes out an itinerary, and then I can put that itinerary into MindTrip and it can fill in the details.

Do you think that's possible? And can you write this out as like next steps so the map, let's say with the image, we have an image that we can, that you could, share or load or whatever it is, and see what it come up with to compare it to our itineraries to see how realistic the itinerary suggestions that it gives to road trip itineraries.

I share all of this to show how AI can be used as a brainstorming tool, but rooted in the truth of what needs to be accomplished. And the way that we rooted in truth is by providing a whole lot of context around it and providing that source of truth, which was the briefing document from the marketing team about the campaign.

 But I do the approach of just paste it in and then piece by piece, provide the information. And obviously it still works if you're typing instead of talking to it, but the more we get into the habit of talking, the better the AI outputs will be, and certainly you don't have to feel limited to English to do that.

You can use whatever your first language is. AI is very likely going to understand it.  It doesn't have to be clean and polished. You can just let thoughts come to your head and let the AI make sense out of it. We don't have to have all of the answers at once.`,
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

  if (!webinar) {
    return (
      <AccessCheck>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Webinar not found</p>
        </div>
      </AccessCheck>
    )
  }

  // Map of AI tools mentioned in each webinar for schema.org mentions property
  const webinarMentions: Record<string, any[]> = {
    'intro-ai-agents': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Browse.ai', applicationCategory: 'Web Scraping', url: 'https://browse.ai' },
      { '@type': 'SoftwareApplication', name: 'Manus.im', applicationCategory: 'AI Agent', url: 'https://manus.im' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'N8N', applicationCategory: 'Workflow Automation', url: 'https://n8n.io' },
      { '@type': 'SoftwareApplication', name: 'Agent.ai', applicationCategory: 'AI Agent Builder', url: 'https://agent.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'custom-gpts': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
    ],
    'ai-convention-sales': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
    ],
    'crit-framework': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
    'model-context-protocol': [
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Model Context Protocol', applicationCategory: 'AI Protocol', url: 'https://modelcontextprotocol.io' },
    ],
    'ai-101': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'ai-tool-playground': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
    ],
    'ai-dmo-leadership': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
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
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    creator: {
      '@type': 'Person',
      name: webinar.instructor,
      jobTitle: webinar.instructorTitle,
    },
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer, SVP Innovation',
      affiliation: {
        '@type': 'Organization',
        name: 'Brand USA'
      },
      knowsAbout: [
        'AI for tourism marketing',
        'Destination marketing AI strategy',
        'Model Context Protocol (MCP)',
        'AI agents for DMOs',
        'Custom GPTs for tourism',
        'CRIT framework for AI prompts',
        'Agentic AI in destination marketing',
        'AI governance in tourism industry',
        'Claude Artifacts for DMO operations',
        'Tourism industry automation'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brand USA Agents of Change',
      url: 'https://brand-usa-agents-of-change.vercel.app'
    },
    isPartOf: {
      '@type': 'Course',
      name: 'AI for Destination Marketing Organizations',
      provider: {
        '@type': 'Organization',
        name: 'Brand USA Agents of Change'
      }
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
        text: (webinar as any).transcript,
        encodingFormat: 'text/plain'
      }
    },
    hasPart: webinar.chapters.map((chapter: any) => ({
      '@type': 'Clip',
      name: chapter.title,
      startOffset: chapter.time
    })),
    ...(webinarMentions[params.id] && {
      mentions: webinarMentions[params.id]
    })
  }

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://brand-usa-agents-of-change.vercel.app'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Webinars',
        item: 'https://brand-usa-agents-of-change.vercel.app/#webinars'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: webinar.title,
        item: `https://brand-usa-agents-of-change.vercel.app/webinar/${params.id}`
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability - Server-Rendered OUTSIDE client components */}
      <script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      ></script>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>

      <AccessCheck>
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
                <TranscriptToggle transcript={(webinar as any).transcript} />
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