var Io = {};

/**
 * Creates a folder.
 *
 */
function mkdir(path) {
	return IoUtils.safeFolder(path);
}

Io.getPath = function(fileOrBaseFolder, optionalFile) {
	if(optionalFile === undefined) {
		return new java.io.File(fileOrBaseFolder); 
	}
	
	return new java.io.File(fileOrBaseFolder, optionalFile);
}	

/**
 * Returns a List with a string for each line of the given file
 */
function readLines(fileOrBaseFolder, optionalFile) {
	return LaraIo.readLines(Io.getPath(fileOrBaseFolder, optionalFile));	
}

function deleteFile(fileOrBaseFolder, optionalFile) {
	return LaraIo.deleteFile(Io.getPath(fileOrBaseFolder, optionalFile));
}