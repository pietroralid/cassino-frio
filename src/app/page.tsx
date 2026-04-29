type OpenMeteoResponse = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
  };
};

const CASSINO = {
  latitude: -32.1842,
  longitude: -52.1686,
};

const COLD_LIMIT_CELSIUS = 18;

async function getCurrentWeather() {
  const params = new URLSearchParams({
    latitude: String(CASSINO.latitude),
    longitude: String(CASSINO.longitude),
    current: "temperature_2m,apparent_temperature",
    timezone: "America/Sao_Paulo",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel buscar o clima agora.");
  }

  return (await response.json()) as OpenMeteoResponse;
}

export default async function Home() {
  const weather = await getCurrentWeather();
  const apparentTemperature = Math.round(weather.current.apparent_temperature);
  const isCold = apparentTemperature < COLD_LIMIT_CELSIUS;

  return (
    <main className={isCold ? "page cold" : "page warm"}>
      <section className="answer" aria-live="polite">
        <p className="kicker">Praia do Cassino, RS</p>
        <h1>{isCold ? "Esta frio." : "Nao esta frio."}</h1>
        <p className="temperature">Sensacao de {apparentTemperature}°C</p>
      </section>
    </main>
  );
}
