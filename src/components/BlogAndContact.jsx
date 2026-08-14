import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import Card from "./ui/Card";
import TextInput from "./ui/TextInput";
import SocialIcon from "./ui/SocialIcon";
import { PrimaryButton } from "./ui/Buttons";
import { BLOG_POSTS } from "../data/portfolioData";

export default function BlogAndContact() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Let's work together */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Let's Work Together</h3>
          <span className="mt-2 block h-1 w-8 rounded-full bg-violet-500" />
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            I'm currently open to new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
            <TextInput as="textarea" rows={4} placeholder="Message" />
            <PrimaryButton icon={Send} type="submit" className="w-full">
              Send Message
            </PrimaryButton>
          </form>
          <div className="mt-6 space-y-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-violet-500 dark:text-violet-400" />
              pokuaaagyemangdoris@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-violet-500 dark:text-violet-400" />
              <a href="tel:00233257624221">Call me for Bussiness</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-violet-500 dark:text-violet-400" />
        Kumasi, Ghana
            </div>
          </div>
        </Card>

        {/* Blog */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Blog</h3>
            <a href="#blog" className="text-xs text-violet-500 hover:underline dark:text-violet-400">
              View All Posts
            </a>
          </div>
          <span className="mt-2 block h-1 w-8 rounded-full bg-violet-500" />
          <ul className="mt-5 space-y-5">
            {BLOG_POSTS.map((post) => (
              <li key={post.title} className="flex gap-3">
                <div className="h-14 w-16 shrink-0 rounded-lg bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{post.title}</h4>
                  <p className="text-[10px] text-violet-500 dark:text-violet-400">{post.date}</p>
                  <p className="mt-1 text-[11px] text-slate-500 line-clamp-2 dark:text-slate-400">
                    {post.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Contact */}
        <Card id="contact" className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact</h3>
          <span className="mt-2 block h-1 w-8 rounded-full bg-violet-500" />
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Have a project in mind or want to work together? Let's connect!
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
            <TextInput as="textarea" rows={4} placeholder="Message" />
            <PrimaryButton icon={Send} type="submit" className="w-full">
              Send Message
            </PrimaryButton>
          </form>
          <div className="mt-6 flex gap-3">
            <SocialIcon icon={Github} label="GitHub" href="https://github.com/dorispokuaaagyemang" />
            <SocialIcon icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/doris-pokuaa-agyemang-3b6946429/"  />
            <SocialIcon icon={Twitter} label="Twitter" href="https://x.com/DorisPokua7yvw" />
            <SocialIcon icon={Mail} label="Email" href="mailto:dorispokuaaagyemang@gmail.com" />
          </div>
        </Card>
      </div>
    </section>
  );
}
