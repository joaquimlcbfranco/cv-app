import "../styles/footer.css";

export default function Header() {
	return (
		<>
			<footer className="footer">
				<p>
					CV App made with{" "}
					<a href="https://react.dev/" target="_blank">
						React
					</a>{" "}
					|{" "}
					<a
						href="https://github.com/joaquimlcbfranco/cv-app"
						target="_blank"
					>
						Source Code
					</a>{" "}
					|{" "}
					<a
						href="https://github.com/joaquimlcbfranco"
						target="_blank"
					>
						GitHub
					</a>
				</p>
			</footer>
		</>
	);
}
