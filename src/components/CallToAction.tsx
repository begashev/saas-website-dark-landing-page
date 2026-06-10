export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="container">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy oc accomplishment with an app designed to track your progress and motivate your efforts</p>
        <form className="mt-10 flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" name="" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lgl px-5 font-medium placeholder:text-[#9CA3AF] flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg">Get access</button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
