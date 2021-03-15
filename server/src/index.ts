import app from './app';

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  console.log(`Ejecutandose en http://localhost:${PORT}`);
});