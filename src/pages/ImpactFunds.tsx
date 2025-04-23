
// Inside the funds mapping section, update the image rendering
<div className="relative w-full h-48">
  <img
    src={fund.image}
    alt={fund.name}
    className="w-full h-full object-cover brightness-110 contrast-110" // Added brightness and contrast
  />
  <div className={`absolute inset-0 bg-gradient-to-br ${fund.bgGradient} opacity-40`}></div>
</div>
