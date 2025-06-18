            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glowing-button"
            >
              <Button size="lg" asChild className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-5 w-5" /> View Projects
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glowing-button"
            >
              <Button size="lg" asChild className="bg-gray-700 text-white hover:bg-gray-600 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" /> Download Resume
                </Link>
              </Button>
            </motion.div> 