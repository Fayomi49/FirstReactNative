import { useState } from "react";
import {
	Button,
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
} from "react-native";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const [courseGoals, setCourseGoals] = useState([]);
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};
	const addGoalHandler = () => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInputs}
					placeholder="Your Goals!"
					onChangeText={goalInputHandler}></TextInput>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView>
					{courseGoals.map((goal) => (
						<View style={styles.goalItem} key={goal}>
							<Text style={styles.goalText}>{goal}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBlockStart: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInputs: {
		borderColor: "#cccccc",
		borderWidth: 1,
		width: "70%",
		padding: 8,
		marginRight: 8,
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
		color: "white",
		padding: 8,
	},
	goalText: {
		color: "white",
	},
});
