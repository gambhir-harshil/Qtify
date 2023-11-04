export default function HomeBanner() {
  return (
    <div className="flex sm:h-[16rem] h-[24rem] justify-center items-center gap-6 flex-col-reverse sm:flex-row">
      <h1 className="text-white text-3xl font-semibold text-center leading-relaxed">
        100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
      </h1>
      <img src="./headphone.svg" alt="" />
    </div>
  );
}
