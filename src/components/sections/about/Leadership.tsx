const Leadership = () => {
  const leadershipItems = [
    {
      id: "lead-2",
      position: "Delegate",
      organization: "FIMUN (Final Model United Nations) Conference",
      period: "20-22 April 2018 - Adana, Turkey",
      description:
        "Actively participated in discussions on child labor to address global human rights challenges. Developed public speaking and cross-cultural communication abilities through networking with students from diverse backgrounds.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Leadership & Activities</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-8">
          {leadershipItems.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-[#2C3E50] pl-4 py-1"
            >
              <h3 className="text-xl font-semibold">{item.position}</h3>
              <p className="text-gray-700 mb-1">{item.organization}</p>
              <p className="text-gray-700 text-sm mb-2">{item.period}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
