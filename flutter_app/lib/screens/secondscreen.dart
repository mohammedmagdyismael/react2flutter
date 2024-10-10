import "package:flutter/material.dart";
import "package:flutter_app/app/utils/routes.dart";
import "package:flutter_app/app/apis/second_screen.dart";

class SecondScreen extends StatefulWidget {
  const SecondScreen({super.key});

  @override
  SecondScreenState createState() => SecondScreenState();
}

class SecondScreenState extends State<SecondScreen> {
  final SecondScreenApi secondscreenapi = SecondScreenApi();
  late Future<List<dynamic>> groups;

  @override
  void initState() {
    super.initState();
    groups = secondscreenapi.groupsAPI(); // Fetch groups on initialization
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const Text('Screen Two'),
          ElevatedButton(
              onPressed: () =>
                  {Navigator.pushNamed(context, Routes.firstscreen)},
              child: const Text('Return to First Screen'))
        ],
      ),
    );
  }
}
