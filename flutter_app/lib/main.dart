import 'package:flutter/material.dart';
import 'package:flutter_app/screens/firstscreen.dart';
import 'package:flutter_app/screens/secondscreen.dart';
import 'package:flutter_app/app/utils/routes.dart';

void main() {
  runApp(const AppContainer());
}

class AppContainer extends StatelessWidget {
  const AppContainer({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        showPerformanceOverlay: false,
        title: 'React 2 Flutter',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        home: const FirstScreen(),
        routes: {
          Routes.firstscreen: (context) => const FirstScreen(),
          Routes.secondscreen: (context) => const SecondScreen(),
        });
  }
}
